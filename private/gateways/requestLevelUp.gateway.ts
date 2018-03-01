import * as Ws from 'ws'; import { GatewayDecorator, IncomeDecorator } from 'quartzfw';
@GatewayDecorator('requestLevelUp')
export default class requestLevelUpGateway {
    @IncomeDecorator('requestLevelUp')
    requestLevelUp(client: any, lvlUpRequest: {
        skillId: number, token: string
	}): void { /*
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
						if (!isString(levelUpRequest)) {
							this._server.to(client.id).emit('acceptedLevelUp', levelUpRequest);
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
		}*/
    }
}