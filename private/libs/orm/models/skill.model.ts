import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Skill {
	@PrimaryGeneratedColumn()
	ID: number;

	@Column()
	Type: string;

	@Column()
	MaxLevel: number;

	@Column()
	Description: string;

	@Column()
	SkillLink: string;

	@Column()
	ImgUrl: string;
}