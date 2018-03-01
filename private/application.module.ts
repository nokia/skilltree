import { Application, static as Static } from 'express';
import { AppDecorator, ModuleDecorator } from 'quartzfw';


import IndexController from './controllers/index.controller';
import FindUserByNameGateway from './gateways/findUserByName.gateway';
import LoginWithoutTokenGateway from './gateways/loginWithoutToken.gateway';
import QuerySkillTreeGateway from './gateways/querySkillTree.gateway';
import LoginWithTokenGateway from './gateways/loginWithToken.gateway';
import RequestAcceptDataShareGateway from './gateways/requestAcceptDataShare.gateway';
import RequestAddCommentGateway from './gateways/requestAddComment.gateway';
import RequestLevelUpGateway from './gateways/requestLevelUp.gateway';
import QuerySkillTreeWithUsernameGateway from './gateways/querySkillTreeWithUsername.gateway';
import QueryTimelineGateway from './gateways/queryTimeline.gateway';
import QueryIsManagerGateway from './gateways/queryIsManager.gateway';

@ModuleDecorator({
	controllers: [
		IndexController
	],
	gateways: [
		FindUserByNameGateway,
		LoginWithTokenGateway,
		LoginWithoutTokenGateway,
		QueryIsManagerGateway,
		QuerySkillTreeGateway,
		RequestAcceptDataShareGateway,
		RequestAddCommentGateway,
		RequestLevelUpGateway,
		QuerySkillTreeWithUsernameGateway,
		QueryTimelineGateway,
		QueryIsManagerGateway
	]
})
export default class ApplicationModule {
	@AppDecorator
	private app?: Application;

	constructor() {
		//
	}
}
