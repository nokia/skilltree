import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ManyToOne } from 'typeorm/decorator/relations/ManyToOne';

import { User } from './user.model';

@Entity()
export class Endorsment {
	@PrimaryGeneratedColumn()
	ID: number;

	@ManyToOne(type => User, { cascadeAll: true })
	From: User;

	@ManyToOne(type => User, { cascadeAll: true })
	To: User;
}