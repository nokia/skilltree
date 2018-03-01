import * as Ws from 'ws'; import { GatewayDecorator, IncomeDecorator } from 'quartzfw';
@GatewayDecorator('findUserByName')
export default class findUserByNameGateway {
    @IncomeDecorator('findUserByName')
    findUserByName(client: any, name: string){  // <-- should be async and should promise void
        /*  let user: User | undefined = await this._databaseManager
              .findUserByName(name);
          if (user) {
              this._server.to(client.id).emit('acceptedFindUserByName', user);
          } else {
              this._server.to(client.id).emit('deniedFindUserByName', 'Account is not found');
          } */
    }
}