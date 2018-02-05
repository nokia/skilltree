import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ManyToOne } from 'typeorm/decorator/relations/ManyToOne';

import { Skill } from './skill.model';
import { User } from './user.model';
import { ValidateNested } from 'class-validator';

@Entity()
export class Training {
	@PrimaryGeneratedColumn()
	ID: number;

	@Column()
	Link: string;

	@Column({ default: false })
	Accepted: boolean;

	@ManyToOne(type => User, User => User.ID, {
		cascadeInsert: true,
		cascadeUpdate: true,
		cascadeRemove: true
	})
	@ValidateNested()
	AcceptedBy: User;

	@Column()
	AcceptedDate: Date;

	@ManyToOne(type => Skill, Skill => Skill.ID, {
		cascadeInsert: true,
		cascadeUpdate: true,
		cascadeRemove: true
	})
	@ValidateNested()
	Skill: Skill;
}