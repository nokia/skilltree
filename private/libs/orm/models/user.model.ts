import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ManyToOne } from 'typeorm/decorator/relations/ManyToOne';

import { Role } from './role.model';

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	ID: number;

	@Column()
	Name: string;

	@Column()
	Rank: number;

	@Column()
	WillingToTeach: boolean;

	@Column()
	Username: string;

	@ManyToOne(type => User, { cascadeAll: true })
	Manager: User;

	@ManyToOne(type => Role, { cascadeAll: true })
	Role: Role;
}