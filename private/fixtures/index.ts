import 'reflect-metadata';

import * as Env from 'env-var';
import * as Fs from 'fs';
import { createConnection } from 'typeorm';
import { Connection } from 'typeorm/connection/Connection';

import Logger from '../libs/logger/logger';
import { Skill } from '../libs/orm/models/skill.model';
import dataSeeder from './dataSeeder';

createConnection({
	type: 'mysql',
	host: Env.get('DB_HOST').asString() || 'localhost',
	port: Env.get('DB_PORT').asIntPositive() || 3306,
	username: Env.get('DB_USER').asString() || 'root',
	password: Env.get('DB_PASSWORD').asString() || 'admin',
	database: Env.get('DB_NAME').asString() || 'test',
	synchronize: true,
	entities: [
		`${__dirname}/../libs/orm/models/*.js`
	],
	logging: false
}).then((connection: Connection) => {
	Logger.info('Connection is successful!');
	Fs.readdir(`${__dirname}/../../fixturesDatas/`, (err, fileNames) => {
		if (!err) {
			fileNames.forEach(fileName => {
				dataSeeder.SeedData(Skill,
					`${ __dirname }/../../fixturesDatas/${ fileName }`, connection);
			});
		} else {
			Logger.error(err);
		}
	});
}).catch((err: Error) => {
	Logger.error(err);
});
