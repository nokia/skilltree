import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ManyToOne } from 'typeorm/decorator/relations/ManyToOne';

import { User } from './user.model';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class Endorsement {
	@PrimaryGeneratedColumn()
	ID: number;

	@Column({ type: 'text' })
	@IsNotEmpty()
	Comment: string;

	@ManyToOne(type => User)
	From: User;

	@ManyToOne(type => User)
	To: User;
}