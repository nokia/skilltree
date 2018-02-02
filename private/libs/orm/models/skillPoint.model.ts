import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ManyToOne } from 'typeorm/decorator/relations/ManyToOne';

import { Skill } from './skill.model';
import { User } from './user.model';

@Entity()
export class SkillPoint {
	@PrimaryGeneratedColumn()
	ID: number;

	@Column()
	Level: number;

	@Column({ default: false })
	Accepted: boolean;

	@ManyToOne(type => User, { cascadeAll: true })
	AcceptedBy: User;

	@Column()
	AcceptedDate: Date;

	@ManyToOne(type => User, { cascadeAll: true })
	User: User;

	@ManyToOne(type => Skill, { cascadeAll: true })
	Skill: Skill;
}