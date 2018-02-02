import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ManyToOne } from 'typeorm/decorator/relations/ManyToOne';

import { Badge } from './badge,model';
import { User } from './user.model';

@Entity()
export class UserBadges {
	@PrimaryGeneratedColumn()
	ID: number;

	@ManyToOne(type => User, { cascadeAll: true })
	User: User;

	@ManyToOne(type => Badge, { cascadeAll: true })
	Badge: Badge;

	@Column({ default: false })
	Accepted: boolean;

	@ManyToOne(type => User, { cascadeAll: true })
	AcceptedBy: User;

	@Column()
	AcceptedDate: Date;
}