import * as Ws from 'ws'; import { GatewayDecorator, IncomeDecorator } from 'quartzfw';
@GatewayDecorator('loginWithToken')
export default class loginWithTokenGateway {
    @IncomeDecorator('loginWithToken')
    loginWithToken(client: any, token: string): void {
            /*let decryptedToken: { username: string, nbf: number, iat: number } =
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
				})() // Here the '()' calls the previously declared function, starting with '(async..'
			} else {
				this._server.to(client.id).emit('deniedLogin', 'Wrong token');
			}
		} else {
			this._server.to(client.id).emit('deniedLogin', 'Wrong token');
		}*/
    }
}