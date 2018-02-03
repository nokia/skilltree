import { IsBoolean, IsDate, Min, ValidateNested } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ManyToOne } from 'typeorm/decorator/relations/ManyToOne';

import { Skill } from './skill.model';
import { User } from './user.model';

@Entity()
export class SkillPoint {
	@PrimaryGeneratedColumn()
	ID: number;

	@Column()
	@Min(0)
	Level: number;

	@Column({ default: false })
	@IsBoolean()
	Accepted: boolean;

	@ManyToOne(type => User, { cascadeAll: true })
	@ValidateNested()
	AcceptedBy: User;

	@Column()
	@IsDate()
	AcceptedDate: Date;

	@ManyToOne(type => User, { cascadeAll: true })
	User: User;

	@ManyToOne(type => Skill, { cascadeAll: true })
	Skill: Skill;
}