import 'reflect-metadata';

import { INestApplication } from '@nestjs/common/interfaces';
import { NestFactory } from '@nestjs/core';
import * as Env from 'env-var';
import * as Express from 'express';

import Logger from './libs/logger';
import { ApplicationModule } from './modules';
import * as Https from 'https';
import * as Fs from 'fs';

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
	private _nestApp: INestApplication;
	private _app: Express.Application = Express();
	private _httpServer: Https.Server;

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
		let key = Fs.readFileSync('domain.key');
		let cert = Fs.readFileSync('domain.crt');
		this._httpServer = Https.createServer({ key: key, cert: cert }, this._app);
		this._nestApp = await NestFactory.create(ApplicationModule, this._app);
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
		this._nestApp.use('/static', Express.static(`${__dirname}/static`));
		this._nestApp.use('/assets', Express.static(`${__dirname}/../assets`));
		this._nestApp.set('views', `${__dirname}/views`);
		this._nestApp.set('view engine', 'js');
		this._nestApp.engine('js', require('express-react-engine')({ wrapper: './components/wrapper/wrapper.component.js' }));
	}

	/**
	 * Start NestApplication
	 * 
	 * @class Server
	 * @method startListen
	 * @returns { void } Promise
	 */
	public async startListen(): Promise<void> {
		await this._nestApp.init();
		this._httpServer.listen(this.port, () => {
			Logger.info('Server is listening');
		});
	}
}