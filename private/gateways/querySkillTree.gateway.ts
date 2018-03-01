import * as Ws from 'ws'; import { GatewayDecorator, IncomeDecorator } from 'quartzfw';
@GatewayDecorator('querySkillTree')
export default class QuerySkillTreeGateway {
    @IncomeDecorator('querySkillTree')
    querySkillTree(client: any, token: string): void {
            /*let decryptedToken: { username: string, nbf: number, iat: number } =
            this._keyManager.decryptToken(token);
        if (this._keyManager.verifyToken(decryptedToken)) {
            if (decryptedToken && decryptedToken.username) {
                (async () => {
                    let user: User | undefined = await this._databaseManager
                        .findUserByUsername(decryptedToken.username);
                    if (user) {
                        let graph: {
                            nodes: ISkill[],
                            edges: IEdge[]
                        } | undefined = await this._databaseManager.querySkillTree(user);
                        if (graph) {
                            console.log('test');
                            this._server.to(client.id).emit('acceptedSkillTreeQuery', graph);
                        } else {
                            this._server.to(client.id).emit('deniedSkillTreeQuery',
                                'There are no skills present in the database for the given tree.');
                        }
                    } else {
                        this._server.to(client.id).emit('deniedSkillTreeQuery',
                            'Account was not found');
                    }
                })()
            } else {
                this._server.to(client.id).emit('deniedSkillTreeQuery', 'Wrong token');
            }
        } else {
            this._server.to(client.id).emit('deniedSkillTreeQuery', 'Wrong token');
        }*/
    }
}