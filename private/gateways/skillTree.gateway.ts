import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import * as Env from 'env-var';

import DatabaseManager from '../libs/databaseManager/databaseManager';
import KeyManager from '../libs/keyManager';
import { User } from '../libs/orm/models/user.model';
import { isString } from 'util';

@WebSocketGateway({ port: Env.get('SOCKET_PORT').asIntPositive() || 81 })
export class SkillTreeGateway {
	@WebSocketServer()
	private _server: any;
	private _keyManager: KeyManager = KeyManager.getInstance();
	private _databaseManager: DatabaseManager = DatabaseManager.getInstance();

	@SubscribeMessage('querySkillTree')
	querySkillTree(client: any, token: string): void {
		let decryptedToken: { username: string, nbf: number, iat: number } =
			this._keyManager.decryptToken(token);
		if (this._keyManager.verifyToken(decryptedToken)) {
			if (decryptedToken && decryptedToken.username) {
				(async () => {
					let user: User | undefined = await this._databaseManager
						.findUserByUsername(decryptedToken.username);
					if (user) {
						let graph: {
							nodes: {
								id: number,
								label: string,
								image: string,
								description: string,
								accepted: boolean,
								skillLevel: number,
								hidden: boolean
							}[],
							edges: { from: number, to: number }[]
						} | undefined = await this._databaseManager.querySkillTree(user);
						if (graph) {
							this._server.to(client.id).emit('acceptSkillTreeQuery', graph);
						} else {
							this._server.to(client.id).emit('deniedSkillTreeQuery', 'No skill in tree');
						}
					} else {
						this._server.to(client.id).emit('deniedSkillTreeQuery', 'Account is not found');
					}
				})()
			} else {
				this._server.to(client.id).emit('deniedSkillTreeQuery', 'Wrong token');
			}
		} else {
			this._server.to(client.id).emit('deniedSkillTreeQuery', 'Wrong token');
		}
	}

	@SubscribeMessage('requestLevelUp')
	requestLevelUp(client: any, lvlUpRequest: {
		skillId: number, token: string
	}): void {
		let decryptedToken: { username: string, nbf: number, iat: number } =
			this._keyManager.decryptToken(lvlUpRequest.token);
		if (this._keyManager.verifyToken(decryptedToken)) {
			if (decryptedToken && decryptedToken.username) {
				(async () => {
					let user: User | undefined = await this._databaseManager
						.findUserByUsername(decryptedToken.username);
					if (user) {
						let levelUpRequest: string | {
							accepted: boolean,
							skillLevel: number
						} = await this._databaseManager
							.requestLevelUp(user, lvlUpRequest.skillId);
						if(!isString(levelUpRequest)) {
							this._server.to(client.id).emit('acceptLevelUp', levelUpRequest);
						} else {
							this._server.to(client.id).emit('deniedLevelUp', levelUpRequest);
						}
					} else {
						this._server.to(client.id).emit('deniedLevelUp', 'Account is not found');
					}
				})()
			} else {
				this._server.to(client.id).emit('deniedLevelUp', 'Wrong token');
			}
		} else {
			this._server.to(client.id).emit('deniedLevelUp', 'Wrong token');
		}
	}
}