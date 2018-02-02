import { ValidateNested } from 'class-validator';
import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ManyToOne } from 'typeorm/decorator/relations/ManyToOne';

import { Skill } from './skill.model';

@Entity()
export class Parent {
	@PrimaryGeneratedColumn()
	ID: number;

	@ManyToOne(type => Skill, { cascadeAll: true })
	@ValidateNested()
	From: Skill;

	@ManyToOne(type => Skill, { cascadeAll: true })
	@ValidateNested()
	To: Skill;
}