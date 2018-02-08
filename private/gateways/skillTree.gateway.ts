import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import * as Env from 'env-var';

import DatabaseManager from '../libs/databaseManager/databaseManager';
import KeyManager from '../libs/keyManager';
import { User } from '../libs/orm/models/user.model';

@WebSocketGateway({ port: Env.get('SOCKET_PORT').asIntPositive() || 81 })
export class SkillTreeGateway {
	@WebSocketServer()
	private _server: any;
	private _keyManager: KeyManager = KeyManager.getInstance();
	private _databaseManager: DatabaseManager = DatabaseManager.getInstance();

	@SubscribeMessage('querySkillTree')
	loginWithToken(client: any, token: string): void {
		let decryptedToken: { username: string, nbf: number, iat: number } =
			this._keyManager.decryptToken(token);
		if (this._keyManager.verifyToken(decryptedToken)) {
			if (decryptedToken && decryptedToken.username) {
				(async () => {
					let user: User | undefined = await this._databaseManager
						.findUserByUsername(decryptedToken.username);
					if (user) {
						console.log('sasad');
						let graph: {
							nodes: {
								id: number,
								label: string,
								image: string,
								description: string
							}[],
							edges: { from: number, to: number }[]
						} | undefined = await this._databaseManager.querySkillTree();
						console.log('sad');
						if(graph) {
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
}