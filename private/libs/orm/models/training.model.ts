import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ManyToOne } from 'typeorm/decorator/relations/ManyToOne';

import { Skill } from './skill.model';
import { User } from './user.model';

@Entity()
export class Training {
	@PrimaryGeneratedColumn()
	ID: number;

	@Column()
	Link: string;

	@Column({ default: false })
	Accepted: boolean;

	@ManyToOne(type => User, { cascadeAll: true })
	AcceptedBy: User;

	@Column()
	AcceptedDate: Date;

	@ManyToOne(type => Skill, { cascadeAll: true })
	Skill: Skill;
}