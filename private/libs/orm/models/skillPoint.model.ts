import { IsBoolean, IsDate, Min } from 'class-validator';
import * as Env from 'env-var';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ManyToOne } from 'typeorm/decorator/relations/ManyToOne';

import { Skill } from './skill.model';
import { User } from './user.model';

@Entity()
export class SkillPoint {
	@PrimaryGeneratedColumn()
	ID: number;

	@Column({ default: 1 })
	@Min(0)
	Level: number;

	@Column({ default: () => !Env.get('HAVE_TO_ACCEPT_LEVEL_UP').asBool() })
	@IsBoolean()
	Accepted: boolean;

	@ManyToOne(type => User)
	AcceptedBy: User;

	@Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
	@IsDate()
	AcceptedDate: Date;

	@ManyToOne(type => User)
	User: User;

	@ManyToOne(type => Skill)
	Skill: Skill;
}