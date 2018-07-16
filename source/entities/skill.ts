import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Skill entity
 *
 * @export
 * @class Skill
 */
@Entity()
export class Skill {

  /**
   * Auto generated ID
   *
   * @type {number}
   * @memberof Skill
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * Skill's parents
   *
   * @type {Skill[]}
   * @memberof Skill
   */
  @ManyToMany(type => Skill)
  @JoinTable()
  parents: Skill[];

  /**
   * Skill's label
   *
   * @type {string}
   * @memberof Skill
   */
  @Column()
  label: string;

  /**
   * Skill's imageUrl
   *
   * @type {string}
   * @memberof Skill
   */
  @Column()
  imageUrl: string;

  /**
   * Skill's maxLevel
   *
   * @type {number}
   * @memberof Skill
   */
  @Column()
  maxLevel: number;

  /**
   * Skill's description
   *
   * @type {string}
   * @memberof Skill
   */
  @Column()
  description: string;

  /**
   * Skill's links
   *
   * @type {string[]}
   * @memberof Skill
   */
  @Column('simple-array')
  links: string[];
}