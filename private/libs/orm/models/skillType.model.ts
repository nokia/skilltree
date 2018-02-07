import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SkillType {
	@PrimaryGeneratedColumn()
	ID: number;

	@Column()
	Name: string;

	@Column()
	Description: string;
}