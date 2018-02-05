import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ManyToOne } from 'typeorm/decorator/relations/ManyToOne';

import { Badge } from './badge.model';
import { User } from './user.model';

@Entity()
export class UserBadge {
	@PrimaryGeneratedColumn()
	ID: number;

	@ManyToOne(type => User, User => User.ID, {
		cascadeInsert: true,
		cascadeUpdate: true,
		cascadeRemove: true
	})
	User: User;

	@ManyToOne(type => Badge, Badge => Badge.ID, {
		cascadeInsert: true,
		cascadeUpdate: true,
		cascadeRemove: true
	})
	Badge: Badge;

	@Column({ default: false })
	Accepted: boolean;

	@ManyToOne(type => User, User => User.ID, {
		cascadeInsert: true,
		cascadeUpdate: true,
		cascadeRemove: true
	})
	AcceptedBy: User;

	@Column()
	AcceptedDate: Date;
}