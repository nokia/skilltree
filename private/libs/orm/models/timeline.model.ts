import { IsDate, IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ManyToOne } from 'typeorm/decorator/relations/ManyToOne';

import { User } from './user.model';

@Entity()
export class Timeline {
	@PrimaryGeneratedColumn()
	ID: number;

	@ManyToOne(type => User)
	WhitWho: User;

	@Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
	@IsDate()
	When: Date;

	@Column({ type: 'text' })
	@IsNotEmpty()
	Message: string;
}