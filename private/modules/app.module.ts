import { Module } from '@nestjs/common';

import { IndexController } from '../controllers';
import { UserGateway } from '../gateways';

@Module({
	components: [ UserGateway ],
	controllers: [ IndexController ]
})
export class ApplicationModule {}
