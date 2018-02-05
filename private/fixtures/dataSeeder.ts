import { validate } from 'class-validator';
import * as Fs from 'fs';
import { Connection } from 'typeorm/connection/Connection';

import Logger from '../libs/logger';
import { Repository } from 'typeorm/repository/Repository';

export default class DataSeeder {
	public static async SeedData(model: any, dataObject: Object,
		relationRepositories: Array<Repository<any>> | undefined,
		relations: Array<{ Repository: string, Column: string }> | undefined,
		connection: Connection): Promise<any> {
		return new Promise<any>(async (resolve, reject) => {
			let _model = new (<any>model);
			await Promise.all(Object.keys(dataObject).map(async (value): Promise<any> => {
				if (relationRepositories && relations) {
					let filteredRelation = relations.filter(relation => {
						return relation.Column === value;
					});
					if (filteredRelation.length > 0) {
						let relationRepository: Repository<any>[] = relationRepositories.filter(
							repository => {
								return repository.metadata.name === filteredRelation[0]['Repository'];
							});
						return _model[value] =
							await relationRepositories[0].findOneById(dataObject[value]);
					} else {
						return _model[value] = dataObject[value];
					}
				} else {
					
					return _model[value] = dataObject[value];
				}
			}));
			let errors = await validate(_model);
			if (errors.length > 0) {
				Logger.error('Validation failed!');
			} else {
				try {
					resolve(_model);
				} catch (error) {
					Logger.error(error.message);
					resolve(false);
				}
			}
		});
	}

	public static readJson(location: string): Object[] {
		const JsonObjects = JSON.parse(Fs.readFileSync(location, 'utf8'));
		return JsonObjects;
	}
}