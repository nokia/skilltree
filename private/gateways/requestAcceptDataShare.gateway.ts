import * as Ws from 'ws'; import { GatewayDecorator, IncomeDecorator } from 'quartzfw';
@GatewayDecorator('requestAcceptDataShare')
export default class requestAcceptDataShareGateway {
    @IncomeDecorator('requestAcceptDataShare')
    requestAcceptDataShare(client: any, token: string): void {
        /*
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
        }*/
    }

}