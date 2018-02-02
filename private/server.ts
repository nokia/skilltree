import 'reflect-metadata';

import { INestApplication } from '@nestjs/common/interfaces';
import { NestFactory } from '@nestjs/core';
import * as Env from 'env-var';
import * as Express from 'express';

import Logger from './libs/logger';
import { ApplicationModule } from './modules';

/**
 * The server.
 * By: David Zarandi (Azuwey)
 * 2017
 *
 * @class Server
 */
export class Server {
	private static _instance: Server = new Server (
		Env.get('PORT').asIntPositive()
	);
	private _app: INestApplication;

	/**
	 * Constructor.
	 * 
	 * @class Server
	 * @constructor
	 * @param { number = '8080' } port
	 */
	constructor (
		private readonly port: number = 8080
	) {
		if(Server._instance){
			throw new Error('Instantiation failed: Use Service.getInstance() instead of new.');
		} else {
			Server._instance = this;
			this.createApp();
		}
	}

	/**
	 * Return Server instance
	 * 
	 * @class Server
	 * @method getInstance
	 * @returns Server
	 */
	public static getInstance(): Server {
		return Server._instance;
	} 

	/**
	 * Create a NestApplication
	 * 
	 * @class Server
	 * @method createApp
	 * @returns { void } Promise
	 */
	private async createApp(): Promise<void> {
		this._app = await NestFactory.create(ApplicationModule);
		this.configureApp();
		this.startListen();
	}

	/**
	 * Configure NestApplication
	 * 
	 * @class Server
	 * @method configureApp
	 * @returns void
	 */
	private configureApp(): void {
		this._app.use('/static', Express.static(`${__dirname}/static`));
		this._app.set('views', `${__dirname}/views`);
		this._app.set('view engine', 'js');
		this._app.engine('js', require('express-react-engine')({ wrapper: './components/wrapper/wrapper.component.js' }));
	}

	/**
	 * Start NestApplication
	 * 
	 * @class Server
	 * @method startListen
	 * @returns { void } Promise
	 */
	public async startListen(): Promise<void> {
		await this._app.listen(this.port, () => {
			Logger.info('Server is listening');
		});
	}
}