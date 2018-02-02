import { validate } from 'class-validator';
import * as Fs from 'fs';
import { Connection } from 'typeorm/connection/Connection';

import Logger from '../libs/logger';

export default class DataSeeder {
	public static SeedData(model: any, datas: Object[], connection: Connection): void {
		let repository = connection.getRepository(model);
		datas.forEach(async dataObject => {
			let _model = new (<any>model);
			Object.keys(dataObject).forEach(value => {
				_model[value] = dataObject[value];
			});
			let errors = await validate(_model);
			if (errors.length > 0) {
				Logger.error('Validation failed!');
			} else {
				try {
					await repository.save(_model);
					Logger.info(`Migration is complete: ${JSON.stringify(_model)
						.substring(0, 30)}...`);
				} catch (error) {
					Logger.error(error.message);
				}
			}
		});
	}

	public static readJson(location: string): Object[] {
		const JsonObjects = JSON.parse(Fs.readFileSync(location, 'utf8'));
		return JsonObjects;
	}
}