import * as Ws from 'ws'; import { GatewayDecorator, IncomeDecorator } from 'quartzfw';
@GatewayDecorator('querySkillTreeWithUsername')
export default class QuerySkillTreeWithUsernameGateway {
    @IncomeDecorator('querySkillTreeWithUsername')
    querySkillTreeWithUsername(client: any, username: string) { // <-- should be async and should promise void
            /*let user: User | undefined = await this._databaseManager
			.findUserByUsername(username);
		if (user) {
			let graph: {
				nodes: ISkill[],
				edges: IEdge[]
			} | undefined = await this._databaseManager.querySkillTree(user);
			if (graph) {
				this._server.to(client.id).emit('acceptedSkillTreeQueryWithUsername', graph);
			} else {
				this._server.to(client.id).emit('deniedSkillTreeQueryWithUsername',
					'No skill in tree');
			}
		} else {
			this._server.to(client.id).emit('deniedSkillTreeQuery', 'Account is not found');
		}*/
    }
}