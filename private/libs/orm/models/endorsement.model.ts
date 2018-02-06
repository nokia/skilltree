import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ManyToOne } from 'typeorm/decorator/relations/ManyToOne';

import { User } from './user.model';

@Entity()
export class Endorsement {
	@PrimaryGeneratedColumn()
	ID: number;

	@ManyToOne(type => User, User => User.ID, {
		cascadeInsert: true,
		cascadeUpdate: true,
		cascadeRemove: true
	})
	From: User;

	@ManyToOne(type => User, User => User.ID, {
		cascadeInsert: true,
		cascadeUpdate: true,
		cascadeRemove: true
	})
	To: User;
}