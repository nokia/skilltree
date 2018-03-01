import * as Ws from 'ws'; import { GatewayDecorator, IncomeDecorator } from 'quartzfw';
@GatewayDecorator('queryTimeline')
export default class queryTimelineGateway {
    @IncomeDecorator('queryTimeline')
    queryTimeline(client: any, token: string): void {
         /*
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
		}*/
    }
}