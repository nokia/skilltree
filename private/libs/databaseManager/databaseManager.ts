import * as Env from 'env-var';

import Logger from '../logger';
import Orm from '../orm';
import { Parent } from '../orm/models/parent.model';
import { Role } from '../orm/models/role.model';
import { Skill } from '../orm/models/skill.model';
import { SkillPoint } from '../orm/models/skillPoint.model';
import { User } from '../orm/models/user.model';

/**
 * The database manager.
 * By: David Zarandi (Azuwey)
 *
 * @class DatabaseManager
 */
export default class DatabaseManager {
	private static _instance: DatabaseManager = new DatabaseManager();
	private _orm: Orm = Orm.getInstance();

	/**
	 * Constructor.
	 * 
	 * @class DatabaseManager
	 * @constructor
	 */
	constructor() {
		if (DatabaseManager._instance) {
			throw new Error('Error: Instantiation failed: Use DatabaseManager.getInstance() instead of new.');
		} else {
			this._connnectToDatabase((error: Error) => {
				if (!error) {
					Logger.info('Everything is okay with the database');
				} else {
					Logger.error(error.message);
				}
			});
		}
	}

	/**
	 * Return singleton instance
	 *
	 * @class DatabaseManager
	 * @method getInstance
	 * @returns DatabaseManager
	 */
	public static getInstance(): DatabaseManager {
		return DatabaseManager._instance;
	}

	/**
	 * Find user by username
	 *
	 * @class DatabaseManager
	 * @method findUserByUsername
	 * @param { string } username
	 * @returns { Promise<User | undefined> }
	 */
	public async findUserByUsername(username: string): Promise<User | undefined> {
		let userRepository = this._orm.connection.getRepository(User);
		return await userRepository.findOne({ Username: username });
	}

	/**
	 * Find role by name
	 *
	 * @class DatabaseManager
	 * @method findRoleByName
	 * @param { string } username
	 * @returns { Promise<Role | undefined> }
	 */
	private async findRoleByName(roleName: string): Promise<Role | undefined> {
		let roleRepository = this._orm.connection.getRepository(Role);
		return await roleRepository.findOne({ Name: roleName });
	}

	private async findSkillPointByUserAndSkill(user: User, skill: Skill)
		: Promise<SkillPoint | undefined> {
		let skillPointRepository = this._orm.connection.getRepository(SkillPoint);
		return await skillPointRepository.findOne({ User: user, Skill: skill });
	}

	private async findSkillById(skillId: number)
		: Promise<Skill | undefined> {
		let skillRepository = this._orm.connection.getRepository(Skill);
		return await skillRepository.findOne({ ID: skillId });
	}

	/**
	 * Query all skill and their connections
	 *
	 * @class DatabaseManager
	 * @method findRoleByName
	 * @param { string } username
	 * @returns { Promise<Role | undefined> }
	 */
	public async querySkillTree(user: User):
		Promise<{
			nodes: {
				id: number,
				image: string,
				label: string,
				description: string,
				accepted: boolean,
				skillLevel: number
			}[],
			edges: { from: number, to: number }[]
		} | undefined> {
		let skillRepository = this._orm.connection.getRepository(Skill);
		let parentRepository = this._orm.connection.getRepository(Parent);
		let nodesTmp: Skill[] | undefined = await skillRepository.find({
			relations: ['Type']
		});
		let edgesTmp: Parent[] | undefined = await parentRepository.find({
			relations: ['From', 'To']
		});
		if (edgesTmp && nodesTmp) {
			let nodes: {
				id: number,
				label: string,
				image: string,
				description: string,
				accepted: boolean,
				skillLevel: number
			}[] = await Promise.all(nodesTmp.map(async (skill: Skill) => {
				let skillPoint: SkillPoint | undefined =
					await this.findSkillPointByUserAndSkill(user, skill);
				return {
					id: skill.ID,
					label: skill.Name,
					image: skill.ImgUrl,
					description: skill.Description,
					accepted: skillPoint
						? skillPoint.Accepted
						: !Env.get('HAVE_TO_ACCEPT_LEVEL_UP').asBool(),
					skillLevel: skillPoint ? skillPoint.Level : 0
				}
			}));
			let edges: { from: number, to: number }[] = edgesTmp.map((parent: Parent) => {
				return { from: parent.From.ID, to: parent.To.ID };
			});
			return { nodes, edges };
		} else {
			return undefined;
		}
	}

	/**
	 * Create new user by username and full name
	 *
	 * @class DatabaseManager
	 * @method createNewUser
	 * @param { <Name: string, Username: string> } user
	 * @returns { Promise<User | undefined> }
	 */
	public async createNewUser(user: { Name: string, Username: string }): Promise<User | undefined> {
		let userRepository = this._orm.connection.getRepository(User);
		let _user = new User();
		let role: Role | undefined = await this.findRoleByName('employee') ||
			await this.createNewRole('employee');
		_user = Object.assign(_user, { ...user, Rank: 1, Role: role, WillingToTeach: false });
		await userRepository.save(_user);
		return await this.findUserByUsername(_user.Username);
	}

	/**
	 * Create new role by name
	 *
	 * @class DatabaseManager
	 * @method createNewRole
	 * @param { string } roleName
	 * @returns { Promise<Role> }
	 */
	public async createNewRole(roleName: string): Promise<Role> {
		let role: Role | undefined = await this.findRoleByName(roleName);
		if (!role) {
			role = new Role();
			role.Name = roleName;
			let roleRepository = this._orm.connection.getRepository(Role);
			await roleRepository.save(role);
		} else {
			Logger.warn(`${roleName} is already in the role table`);
		}
		return role;
	}

	public async requestLevelUp(user: User, skillId: number): Promise<string | {
		accepted: boolean,
		skillLevel: number
	}> {
		let skill: Skill | undefined = await this.findSkillById(skillId);
		if (skill) {
			let skillPoint: SkillPoint | undefined =
				await this.findSkillPointByUserAndSkill(user, skill);
			if (skillPoint) {
				if (Env.get('HAVE_TO_ACCEPT_LEVEL_UP').asBool() && skillPoint.Accepted) {
					skillPoint.Accepted = false;
				} else if (Env.get('HAVE_TO_ACCEPT_LEVEL_UP').asBool() && !skillPoint.Accepted) {
					return 'The last lavel is not accepted yet.'
				} else {
					//Do nothing
				}
				skillPoint.Level += 1;
			} else {
				skillPoint = new SkillPoint();
				skillPoint.Skill = skill;
				skillPoint.User = user;
			}
			if (await this._orm.connection.getRepository(SkillPoint).save(skillPoint)) {
				return {
					accepted: skillPoint.Accepted,
					skillLevel: skillPoint.Level
				};
			} else {
				return 'Something wrong rty again later!';
			}
		} else {
			return 'Not found that skill!';
		}
	}

	/**
	 * Connect to database
	 *
	 * @class DatabaseManager
	 * @method _connnectToDatabase
	 * @param { Function } callback
	 */
	private _connnectToDatabase(callback: Function) {
		this._orm.connectToDatabase((error: Error) => {
			if (error) {
				Logger.error(error.message);
			} else {
				callback(null);
			}
		});
	}
}