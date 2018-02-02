import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ManyToOne } from 'typeorm/decorator/relations/ManyToOne';

import { Skill } from './skill.model';
import { User } from './user.model';

@Entity()
export class Applicant {
	@PrimaryGeneratedColumn()
	ID: number;

	@ManyToOne(type => User, { cascadeAll: true })
	User: User;

	@ManyToOne(type => Skill, { cascadeAll: true })
	Skill: Skill;

	@Column()
	AcceptedDate: Date;

	@Column()
	Status: string;
}