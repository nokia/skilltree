import { Module } from '@nestjs/common';

import { IndexController } from '../controllers';
import { SkillTreeGateway, TimelineGateway, UserGateway } from '../gateways';

@Module({
	components: [
		SkillTreeGateway,
		TimelineGateway,
		UserGateway
	],
	controllers: [ IndexController ]
})
export class ApplicationModule {}