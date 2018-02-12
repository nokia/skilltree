import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import * as Env from 'env-var';

import DatabaseManager from '../libs/databaseManager/databaseManager';
import KeyManager from '../libs/keyManager';
import { Timeline } from '../libs/orm/models/timeline.model';
import { User } from '../libs/orm/models/user.model';

@WebSocketGateway({ port: Env.get('SOCKET_PORT').asIntPositive() || 81 })
export class TimelineGateway {
	@WebSocketServer()
	private _server: any;
	private _keyManager: KeyManager = KeyManager.getInstance();
	private _databaseManager: DatabaseManager = DatabaseManager.getInstance();

	@SubscribeMessage('queryTimeline')
	queryTimeline(client: any, token: string): void {
		let decryptedToken: { username: string, nbf: number, iat: number } =
			this._keyManager.decryptToken(token);
		if (this._keyManager.verifyToken(decryptedToken)) {
			if (decryptedToken && decryptedToken.username) {
				(async () => {
					let user: User | undefined = await this._databaseManager
						.findUserByUsername(decryptedToken.username);
					if (user) {
						let timeline: { Message: string, When: Date }[] | undefined
							= await this._databaseManager.queryTimeline(user);
						if (timeline) {
							this._server.to(client.id).emit('acceptTimelineQuery', timeline);
						} else {
							this._server.to(client.id).emit('deniedTimelineQuery',
								'No event in the timeline');
						}
					} else {
						this._server.to(client.id).emit('deniedTimelineQuery',
							'Account is not found');
					}
				})()
			} else {
				this._server.to(client.id).emit('deniedTimelineQuery', 'Wrong token');
			}
		} else {
			this._server.to(client.id).emit('deniedTimelineQuery', 'Wrong token');
		}
	}
}