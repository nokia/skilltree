import 'reflect-metadata';

import * as Env from 'env-var';
import * as Fs from 'fs';
import { createConnection } from 'typeorm';
import { Connection } from 'typeorm/connection/Connection';

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

const ModelsArray = [ Applicant, Badge, BadgeType, Endorsement, Parent,
	Role, Skill, SkillPoint, Training, User, UserBadge ];

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
				let datas: Object[] = dataSeeder
					.readJson(`${ __dirname }/../../fixturesDatas/${ fileName }`);
				let model = ModelsArray.filter(modelClass => modelClass.name == datas['Model']);
				dataSeeder.SeedData(model[0], datas['Datas'], connection);
			});
		} else {
			Logger.error(err);
		}
	});
}).catch((err: Error) => {
	Logger.error(err);
});
