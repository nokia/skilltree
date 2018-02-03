import { IsBoolean, IsNotEmpty, Min, ValidateNested } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ManyToOne } from 'typeorm/decorator/relations/ManyToOne';

import { Role } from './role.model';

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	ID: number;

	@Column()
	@IsNotEmpty()
	Name: string;

	@Column()
	@Min(1)
	Rank: number;

	@Column()
	@IsBoolean()
	WillingToTeach: boolean;

	@Column()
	@IsNotEmpty()
	Username: string;

	@ManyToOne(type => User, { cascadeAll: true })
	@ValidateNested()
	Manager: User;

	@ManyToOne(type => Role, { cascadeAll: true })
	@ValidateNested()
	Role: Role;
}