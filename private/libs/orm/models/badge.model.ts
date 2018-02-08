import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ManyToOne } from 'typeorm/decorator/relations/ManyToOne';

import { BadgeType } from './badgeType.model';

@Entity()
export class Badge {
	@PrimaryGeneratedColumn()
	ID: number;

	@Column()
	Name: string;

	@Column()
	Description: string;

	@Column()
	ImgUrl: string;

	@ManyToOne(type => BadgeType)
	Type: BadgeType;
}