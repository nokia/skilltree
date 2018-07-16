import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Skill, User } from '.';

/**
 * Level entity
 *
 * @export
 * @class Level
 */
@Entity()
export class Level {

  /**
   * Auto generated ID
   *
   * @type {string}
   * @memberof Level
   */
  @PrimaryGeneratedColumn('uuid')
  id: string;

  /**
   * Level's skill
   *
   * @type {Skill}
   * @memberof Level
   */
  @ManyToOne(type => Skill)
  skill: Skill

  /**
   * Level's currentLevel
   *
   * @type {number}
   * @memberof Level
   */
  @Column()
  currentLevel: number;

  /**
   * Level's owner
   *
   * @type {Skill}
   * @memberof Level
   */
  @ManyToOne(type => User)
  owner: User
}