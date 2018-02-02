import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Role {
	@PrimaryGeneratedColumn()
	ID: number;

	@Column()
	Name: string;
}