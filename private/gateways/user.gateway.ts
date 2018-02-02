import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import * as Env from 'env-var';

import DatabaseManager from '../libs/databaseManager/databaseManager';
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

	@SubscribeMessage('loginWithoutToken')
	loginWithoutToken(client: any, data: { username: string, password: string }): void {
		this._ldapRequest.requestLogin(data, async (err, entry) => {
			if (err) {
				Logger.warn(err);
				this._server.to(client.id).emit('deniedLogin', 'Wrong username or password, or account is locked');
			} else {
				let user: User | undefined = await this._databaseManager.findUserByUsername(data.username) ||
					await this._databaseManager.createNewUser({ Name: entry.cn, Username: data.username });
				if (user) {
					let token: string = this._keyManager.generateToken({ username: data.username });
					this._server.to(client.id).emit('acceptLogin', { token: token, user: <IUser>{ ...user } });
				} else {
					this._server.to(client.id).emit('deniedLogin', 'Try again later please');
				}
			}
		});
	}

	@SubscribeMessage('loginWithToken')
	loginWithToken(client: any, token: string): void {
		let encryptedToken: { username: string } = this._keyManager.decryptToken(token);
		if (encryptedToken && encryptedToken.username) {
			(async () => {
				let user: User | undefined = await this._databaseManager.findUserByUsername(encryptedToken.username);
				if (user) {
					this._server.to(client.id).emit('acceptLogin', { user: <IUser>{ ...user } });
				} else {
					this._server.to(client.id).emit('deniedLogin', 'Account is not found');
				}
			})()
		} else {
			this._server.to(client.id).emit('deniedLogin', 'Wrong token');
		}
		
	}
}