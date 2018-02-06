import { Module } from '@nestjs/common';

import { IndexController } from '../controllers';
import { SkillTreeGateway, UserGateway } from '../gateways';

@Module({
	components: [ SkillTreeGateway, UserGateway ],
	controllers: [ IndexController ]
})
export class ApplicationModule {}
