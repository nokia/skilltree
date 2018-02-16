import 'reflect-metadata';

import * as Env from 'env-var';
import { createConnection } from 'typeorm';
import { Connection } from 'typeorm/connection/Connection';

/**
 * The Orm.
 * By: David Zarandi (Azuwey)
 *
 * @class Orm
 */
export default class Orm {
	private static _instance: Orm = new Orm();
	private _connection: Connection;
	public get connection() : Connection {
		return this._connection;
	}

	/**
	 * Constructor.
	 * 
	 * @class Orm
	 * @constructor
	 */
	constructor() {
		if (Orm._instance){
			throw new Error('Error: Instantiation failed: Use Orm.getInstance() instead of new.');
		} else {
			Orm._instance = this;
		}
	}

	/**
	 * Create database connection
	 * 
	 * @class Orm
	 * @method _createConnection
	 * @param { Function } callback
	 * @returns void
	 */
	private _createConnection(callback: Function): void {
		createConnection({
			type: 'mariadb',
			host: Env.get('DB_HOST').asString() || 'localhost',
			port: Env.get('DB_PORT').asIntPositive() || 3306,
			username: Env.get('DB_USER').asString() || 'root',
			password: Env.get('DB_PASSWORD').asString() || 'admin',
			database: Env.get('DB_NAME').asString() || 'test',
			synchronize: true,
			entities: [
				__dirname + '/models/*.js'
			],
			logging: false
		}).then((connection: Connection) => {
			this._connection = connection;
			callback(null, this._connection);
		}).catch((error: Error) => {
			callback(error, null);
		});
	}

	/**
	 * Return singleton instance
	 *
	 * @class Orm
	 * @method getInstance
	 * @returns Orm
	 */
	public static getInstance(): Orm {
		return Orm._instance;
	}

	/**
	 * Connect to database
	 * 
	 * @class Orm
	 * @method connectToDatabase
	 * @param { Function } callback
	 * @returns void
	 */
	public connectToDatabase(callback: Function): void {
		if (!this._connection) {
			this._createConnection(callback);
		} else {
			if (this._connection.isConnected) {
				callback(null, this._connection);
			} else {
				this._connection.connect().then((connection: Connection) => {
					this._connection = connection;
					callback(null, this._connection);
				}).catch((error: Error) => {
					callback(error, null);
				});
			}
		}
	}
}