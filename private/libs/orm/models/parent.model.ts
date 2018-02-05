import { ValidateNested } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, JoinColumn } from 'typeorm';
import { ManyToOne } from 'typeorm/decorator/relations/ManyToOne';

import { Skill } from './skill.model';

@Entity()
export class Parent {
	@PrimaryGeneratedColumn()
	ID: number;

	@ManyToOne(type => Skill, Skill => Skill.ID, {
		cascadeInsert: true,
		cascadeUpdate: true,
		cascadeRemove: true
	})
	From: Skill;

	@ManyToOne(type => Skill, Skill => Skill.ID, {
		cascadeInsert: true,
		cascadeUpdate: true,
		cascadeRemove: true
	})
	To: Skill;
}