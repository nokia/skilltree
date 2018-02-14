/**
 * The skill model.
 * By: David zarandi
 *
 * @interface ISkill
 */
export interface ISkill {
	Id: number,
	Label: string,
	Image: string,
	Description: string,
	SkillLink: string,
	Accepted: boolean,
	SkillLevel: number,
	Hidden: boolean
}