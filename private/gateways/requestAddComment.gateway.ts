import * as Ws from 'ws'; import { GatewayDecorator, IncomeDecorator } from 'quartzfw';
@GatewayDecorator('requestAddComment')
export default class requestAddCommentGateway {
    @IncomeDecorator('requestAcceptDataShare')
    requestAddComment(client: any, data: { comment: string, userFrom: string, userTo: string }) {  // <-- should be async and should promise void
        /*
        let fromUser: User | undefined = await this._databaseManager.findUserByName(data.userFrom);
        let toUser: User | undefined = await this._databaseManager.findUserByName(data.userTo);
        if (fromUser && toUser) {
            let comment = this._databaseManager.requestAddComment(data.comment, fromUser, toUser);
            if (comment) {
                this._server.to(client.id).emit('acceptedComment', comment);
            } else {
                this._server.to(client.id).emit('deniedComment', 'Saving has failed.');
            }
        } else {
            this._server.to(client.id).emit('deniedComment', 'Account was not found.');
        }*/

    }
}