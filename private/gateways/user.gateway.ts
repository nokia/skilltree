import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import * as Env from 'env-var';

import DatabaseManager from '../libs/databaseManager/databaseManager';
import InMemoryDatabaseManager from '../libs/inMemoryDatabaseManager';
import KeyManager from '../libs/keyManager';
import LdapRequest from '../libs/ldapRequest';
import Logger from '../libs/logger';
import { User } from '../libs/orm/models/user.model';
import { IUser } from '../models';

@WebSocketGateway({ port: Env.get('SOCKET_PORT').asIntPositive() || 81 })
export class UserGateway {
	@WebSocketServer()
	private _server: any;
	private _keyManager: KeyManager = KeyManager.getInstance();
	private _ldapRequest: LdapRequest = LdapRequest.getInstance();
	private _databaseManager: DatabaseManager = DatabaseManager.getInstance();
	private _inMemoryDatabaseManager: InMemoryDatabaseManager = InMemoryDatabaseManager.getInstance();

	@SubscribeMessage('loginWithoutToken')
	loginWithoutToken(client: any, data: { username: string, password: string }): void {
		this._ldapRequest.requestLogin(data, async (err, entry) => {
			if (err) {
				Logger.warn(err);
				this._server.to(client.id).emit('deniedLogin', 'Wrong username or password, or the account is locked.');
			} else {
				let user: User | undefined = await this._databaseManager.findUserByUsername(data.username) ||
					await this._databaseManager.createNewUser({ Name: entry.cn, Username: data.username });
				if (user) {
					this._inMemoryDatabaseManager.setCacheByKey(user.Name, client.id);
					let token: string = this._keyManager.generateToken({ username: data.username });
					this._server.to(client.id).emit('acceptLogin', { token: token, user: <IUser>{ ...user } });
				} else {
					this._server.to(client.id).emit('deniedLogin', 'Login failed. This might have happened as a result of delayed response from the database. Please try again a bit later. ');
				}
			}
		});
	}

	@SubscribeMessage('loginWithToken')
	loginWithToken(client: any, token: string): void {
		let decryptedToken: { username: string, nbf: number, iat: number } =
			this._keyManager.decryptToken(token);
		if (this._keyManager.verifyToken(decryptedToken)) {
			if (decryptedToken && decryptedToken.username) {
				(async () => {
					let user: User | undefined = await this._databaseManager
						.findUserByUsername(decryptedToken.username);
					if (user) {
						this._inMemoryDatabaseManager.setCacheByKey(user.Name, client.id);
						this._server.to(client.id).emit('acceptLogin', { user: <IUser>{ ...user } });
					} else {
						this._server.to(client.id).emit('deniedLogin', 'Account is not found');
					}
				})()
			} else {
				this._server.to(client.id).emit('deniedLogin', 'Wrong token');
			}
		} else {
			this._server.to(client.id).emit('deniedLogin', 'Wrong token');
		}
	}

	@SubscribeMessage('requestAcceptDataShare')
	requestAcceptDataShare(client: any, token: string): void {
		let decryptedToken: { username: string, nbf: number, iat: number } =
			this._keyManager.decryptToken(token);
		if (this._keyManager.verifyToken(decryptedToken)) {
			if (decryptedToken && decryptedToken.username) {
				(async () => {
					let user: User | undefined = await this._databaseManager
						.findUserByUsername(decryptedToken.username);
					if (user) {
						if (await this._databaseManager.requestAcceptDataShare(user)) {
							this._server.to(client.id).emit('acceptDataShare');
						} else {
							this._server.to(client.id).emit('deniedDataShare', 'The user has denied the site`s request for data sharing.');
						}
					} else {
						this._server.to(client.id).emit('deniedDataShare', 'Account is not found');
					}
				})()
			} else {
				this._server.to(client.id).emit('deniedDataShare', 'Wrong token');
			}
		} else {
			this._server.to(client.id).emit('deniedDataShare', 'Wrong token');
		}
	}

	@SubscribeMessage('requestAddComment')
	async requestAddComment(client: any, data: { comment: string, userFrom: string, userTo: string }): Promise<void> {
		console.log("user.gateway.ts: ", data);
		let fromUser: User | undefined = await this._databaseManager.findUserByName(data.userFrom);
		console.log("fromUser in usergateway's requestAddComment: ", fromUser);
		let toUser: User | undefined = await this._databaseManager.findUserByName(data.userTo);
		console.log("toUser in usergateway's requestAddComment: ", toUser);
		if (fromUser && toUser) {
			let comment = this._databaseManager.requestAddComment(data.comment, fromUser, toUser);
			if (comment) {
				this._server.to(client.id).emit('acceptedComment', comment);
			} else {
				console.log("denying the comment , saving had failed");
				this._server.to(client.id).emit('deniedComment', 'Saving has failed.');
			}
		} else {
			console.log("denying the comment , account hasnt been found");
			this._server.to(client.id).emit('deniedComment', 'Account was not found.');
		}
	}

	@SubscribeMessage('findUserByName')
	async findUserByName(client: any, name: string): Promise<void> {
		let user: User | undefined = await this._databaseManager
			.findUserByName(name);
		if (user) {
			this._server.to(client.id).emit('acceptedFindUserByName', user);
		} else {
			this._server.to(client.id).emit('deniedFindUserByName', 'Account is not found');
		}
	}
}