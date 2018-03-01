
import Application from './application.module';

import { ServerDecorator, AppDecorator } from 'quartzfw'

@ServerDecorator({
	application: Application,
	forceToSSL: true,
	rejectUnauthorized: false
})
export default class Server {}