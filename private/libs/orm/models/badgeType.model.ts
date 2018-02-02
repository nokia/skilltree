import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BadgeType {
	@PrimaryGeneratedColumn()
	ID: number;

	@Column()
	Name: string;

	@Column()
	Description: string;
}