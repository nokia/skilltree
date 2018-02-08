import { IsNotEmpty, Min } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { SkillType } from './skillType.model';

@Entity()
export class Skill {
	@PrimaryGeneratedColumn()
	ID: number;

	@Column({ unique: true })
	@IsNotEmpty()
	Name: string;

	@Column()
	@Min(1)
	MaxLevel: number;

	@Column()
	@IsNotEmpty()
	Description: string;

	@Column()
	@IsNotEmpty()
	SkillLink: string;

	@Column()
	@IsNotEmpty()
	ImgUrl: string;

	@ManyToOne(type => SkillType)
	Type: SkillType;
}