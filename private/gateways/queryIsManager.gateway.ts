import * as Ws from 'ws'; import { GatewayDecorator, IncomeDecorator } from 'quartzfw';
@GatewayDecorator('queryIsManager')
export default class QueryIsManagerGateway {
    @IncomeDecorator('queryIsManager')
    queryIsManager(client: any, name: string) { // <-- should be async and should promise void
        /*
        let isManager: boolean = await this._databaseManager
            .isManagerFromDB(name);
        this._server.to(client.id).emit('isManagerMngr', isManager);
        */
    }
}