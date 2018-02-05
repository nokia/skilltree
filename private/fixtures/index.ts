import 'reflect-metadata';

import * as Env from 'env-var';
import * as Fs from 'fs';
import { setInterval } from 'timers';
import { createConnection } from 'typeorm';
import { Connection } from 'typeorm/connection/Connection';
import { Repository } from 'typeorm/repository/Repository';

import Logger from '../libs/logger/logger';
import { Applicant } from '../libs/orm/models/applicant.model';
import { Badge } from '../libs/orm/models/badge.model';
import { BadgeType } from '../libs/orm/models/badgeType.model';
import { Endorsement } from '../libs/orm/models/endorsement.model';
import { Parent } from '../libs/orm/models/parent.model';
import { Role } from '../libs/orm/models/role.model';
import { Skill } from '../libs/orm/models/skill.model';
import { SkillPoint } from '../libs/orm/models/skillPoint.model';
import { Training } from '../libs/orm/models/training.model';
import { User } from '../libs/orm/models/user.model';
import { UserBadge } from '../libs/orm/models/userBadge.model';
import dataSeeder from './dataSeeder';

const ModelsArray = [Applicant, Badge, BadgeType, Endorsement, Parent,
	Role, Skill, SkillPoint, Training, User, UserBadge];

createConnection({
	type: 'mariadb',
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
	let transactions: Promise<any>[] = [];
	Fs.readdir(`${__dirname}/../../fixturesDatas/`, (err, fileNames) => {
		if (!err) {
			let fileNamesWithRelation = fileNames.filter(fileName => {
				let datas: Array<object> = dataSeeder
					.readJson(`${__dirname}/../../fixturesDatas/${fileName}`);
				if (datas.hasOwnProperty('Relations')) {
					return true;
				} else {
					return false;
				}
			});
			let fileNamesWithoutRelation = fileNames.filter(fileName => {
				let datas: Array<object> = dataSeeder
					.readJson(`${__dirname}/../../fixturesDatas/${fileName}`);
				if (datas.hasOwnProperty('Relations')) {
					return false;
				} else {
					return true;
				}
			});
			let start = fileNamesWithoutRelation.length > 0;
			seedData(fileNamesWithoutRelation, connection, (transactions: Promise<any>[]) =>
				transactionsHandler(transactions, connection, () => start = false));
			if (start) {
				let timer = setInterval(() => {
					if (!start) {
						clearInterval(timer);
						seedData(fileNamesWithRelation, connection, (transactions: Promise<any>[]) =>
							transactionsHandler(transactions, connection, () => start = false));
					} else {
						//Do notnhing
					}
				}, 100);
			} else {
				seedData(fileNamesWithRelation, connection, (transactions: Promise<any>[]) =>
					transactionsHandler(transactions, connection, () => start = false));
			}
		} else {
			Logger.error(err);
		}
	});
}).catch((err: Error) => {
	Logger.error(err);
});


const seedData = (fileNames: string[], connection: Connection,
	callback: Function) => {
	let transactions: Promise<any>[] = [];
	let maxLength: number = 0;
	fileNames.forEach(fileName => {
		let datas: Array<object> = dataSeeder
			.readJson(`${__dirname}/../../fixturesDatas/${fileName}`);
		maxLength += datas['Datas'].length;
		let relationRepositories: Array<Repository<any>> | undefined = undefined;
		if (datas['Relations']) {
			let relationModels = datas['Relations'].map(relation => relation['Repository']);
			let filteredModels = ModelsArray.filter(
				model => relationModels.includes(model.name));
			relationRepositories = filteredModels.map(
				filteredModel => connection.getRepository(filteredModel));
		}
		let model = ModelsArray.filter(modelClass => modelClass.name == datas['Model']);
		let repository: Repository<any> = connection.getRepository(model[0]);
		datas['Datas'].forEach(async dataObject => {
			transactions.push(await dataSeeder.SeedData(model[0], dataObject,
				relationRepositories, datas['Relations'], connection));
		});
	});
	let timer = setInterval(() => {
		if (transactions.length === maxLength) {
			clearInterval(timer);
			callback(transactions);
		} else {
			Logger.info('Migration is loading');
		}
	}, 100);
}

const transactionsHandler = async (transactions: Promise<any>[], connection: Connection,
	callback: Function) => {
	let queryRunner = connection.createQueryRunner();
	await queryRunner.connect();
	Promise.all(transactions).then(async transactions => {
		await queryRunner.startTransaction();
		Logger.info('Transactions started')
		transactions.forEach(async transaction => {
			await queryRunner.manager.save(transaction);
			await queryRunner.commitTransaction();
			Logger.info('Transaction commited');
		});
		callback();
	});
}