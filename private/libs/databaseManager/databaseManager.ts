import * as Env from 'env-var';

import { IEdge, ISkill } from '../../models';
import Logger from '../logger';
import Orm from '../orm';
import { Parent } from '../orm/models/parent.model';
import { Role } from '../orm/models/role.model';
import { Skill } from '../orm/models/skill.model';
import { SkillPoint } from '../orm/models/skillPoint.model';
import { Timeline } from '../orm/models/timeline.model';
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
	 * @method _findRoleByName
	 * @param { string } username
	 * @returns { Promise<Role | undefined> }
	 */
	private async _findRoleByName(roleName: string): Promise<Role | undefined> {
		let roleRepository = this._orm.connection.getRepository(Role);
		return await roleRepository.findOne({ Name: roleName });
	}

	private async _findSkillPointByUserAndSkill(user: User, skill: Skill)
		: Promise<SkillPoint | undefined> {
		let skillPointRepository = this._orm.connection.getRepository(SkillPoint);
		return await skillPointRepository.findOne({ User: user, Skill: skill });
	}

	private async _findSkillById(skillId: number)
		: Promise<Skill | undefined> {
		let skillRepository = this._orm.connection.getRepository(Skill);
		return await skillRepository.findOne({ ID: skillId });
	}

	private async _findParentsBySkill(skill: Skill)
		: Promise<Parent[] | undefined> {
		let parentRepository = this._orm.connection.getRepository(Parent);
		return await parentRepository.find({
			relations: ['From', 'To'],
			where: {
				To: skill,
			}
		});
	}

	public async queryTimeline(user: User): Promise<Timeline[] | undefined> {
		try {
			let timelineRepository = this._orm.connection.getRepository(Timeline);
			return await timelineRepository.find({
				relations: ['WhitWho'],
				where: {
					WhitWho: user,
				}
			});
		} catch (err) {
			return undefined;
		}
	}

	/**
	 * Query all skill and their connections
	 *
	 * @class DatabaseManager
	 * @method _findRoleByName
	 * @param { string } username
	 * @returns { Promise<Role | undefined> }
	 */
	public async querySkillTree(user: User):
		Promise<{
			nodes: ISkill[],
			edges: IEdge[]
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
			let edges: IEdge[] = edgesTmp.map((parent: Parent) => {
				return { From: parent.From.ID, To: parent.To.ID };
			});
			let nodes: ISkill[] = await Promise.all(nodesTmp.map(async (skill: Skill) => {
				let skillPoint: SkillPoint | undefined =
					await this._findSkillPointByUserAndSkill(user, skill);
				let canOpen = false;
				if (skillPoint) {
					canOpen = true;
				} else {
					let parents: Parent[] | undefined = await this._findParentsBySkill(skill);
					if (parents) {
						canOpen = true;
						await Promise.all(parents.map(async parent => {
							skillPoint = await this._findSkillPointByUserAndSkill(user, parent.From);
							if (!skillPoint || (skillPoint && !skillPoint.Accepted
								&& skillPoint.Level - 1 === 0)) {
								canOpen = false;
							}
						}));
					} else {
						canOpen = true;
					}
				}
				return {
					Id: skill.ID,
					Label: skill.Name,
					Image: skill.ImgUrl,
					Description: skill.Description,
					SkillLink: skill.SkillLink,
					Accepted: skillPoint
						? skillPoint.Accepted
						: !Env.get('HAVE_TO_ACCEPT_LEVEL_UP').asBool(),
					SkillLevel: skillPoint ? skillPoint.Level : 0,
					Hidden: !canOpen
				}
			}));
			return { nodes, edges };
		} else {
			return undefined;
		}
	}

	private async _addEventToTimeline(user: User, message: string): Promise<boolean> {
		try {
			let timelineRepository = this._orm.connection.getRepository(Timeline);
			let _event = new Timeline();
			_event.WhitWho = user;
			_event.Message = message;
			await timelineRepository.save(_event);
			return true;
		} catch (err) {
			return false;
		}
	}

	public async requestAcceptDataShare(user: User): Promise<boolean> {
		try {
			let userRepository = this._orm.connection.getRepository(User);
			user.AcceptDataShare = true;
			await userRepository.save(user);
			await this._addEventToTimeline(user, 'Accept data share');
			return user.AcceptDataShare;
		} catch (err) {
			return false;
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
		let role: Role | undefined = await this._findRoleByName('employee') ||
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
		let role: Role | undefined = await this._findRoleByName(roleName);
		if (!role) {
			role = new Role();
			role.Name = roleName;
			let roleRepository = this._orm.connection.getRepository(Role);
			await roleRepository.save(role);
		} else {
			Logger.warn(`${roleName} is already in the role table.`);
		}
		return role;
	}

	public async requestLevelUp(user: User, skillId: number): Promise<string | {
		accepted: boolean,
		skillLevel: number
	}> {
		let skill: Skill | undefined = await this._findSkillById(skillId);
		if (skill) {
			let skillPoint: SkillPoint | undefined =
				await this._findSkillPointByUserAndSkill(user, skill);
			if (skillPoint) {
				skillPoint.Accepted = !Env.get('HAVE_TO_ACCEPT_LEVEL_UP').required().asBool();
				skillPoint.Level += 1;
			} else {
				skillPoint = new SkillPoint();
				skillPoint.Skill = skill;
				skillPoint.User = user;
			}
			console.log(skillPoint);
			if (await this._orm.connection.getRepository(SkillPoint).save(skillPoint)) {
				console.log('save is successfull');
				if (skillPoint.Accepted) {
					await this._addEventToTimeline(user,
						`Level up ${skill.Name} to LVL ${skillPoint.Level}`);
				} else {
					await this._addEventToTimeline(user,
						`Level up request ${skill.Name} to LVL ${skillPoint.Level}`);
				}
				return {
					accepted: skillPoint.Accepted,
					skillLevel: skillPoint.Level
				};
			} else {
				return 'Something went wrong. Please try again later.';
			}
		} else {
			return 'That skill does not exist anymore.';
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