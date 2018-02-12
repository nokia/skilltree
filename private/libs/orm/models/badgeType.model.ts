import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BadgeType {
	@PrimaryGeneratedColumn()
	ID: number;

	@Column({ unique: true })
	Name: string;

	@Column()
	Description: string;
}