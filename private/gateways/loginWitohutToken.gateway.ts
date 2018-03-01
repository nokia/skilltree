import * as Ws from 'ws'; import { GatewayDecorator, IncomeDecorator } from 'quartzfw';

@GatewayDecorator('loginWithoutToken')
export default class loginWithoutTokenGateway {
    @IncomeDecorator('loginWithoutToken')
    loginWithoutToken(client: any, data: { username: string, password: string }): void {
        /*this._ldapRequest.requestLogin(data, async (err, entry) => {
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
        });*/
    }
}