import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import * as Env from 'env-var';

import DatabaseManager from '../libs/databaseManager/databaseManager';
import KeyManager from '../libs/keyManager';
import { User } from '../libs/orm/models/user.model';
import { IUser } from '../models';
import { Skill } from '../libs/orm/models/skill.model';

@WebSocketGateway({ port: Env.get('SOCKET_PORT').asIntPositive() || 81 })
export class SkillTreeGateway {
	@WebSocketServer()
	private _server: any;
	private _keyManager: KeyManager = KeyManager.getInstance();
	private _databaseManager: DatabaseManager = DatabaseManager.getInstance();

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
}