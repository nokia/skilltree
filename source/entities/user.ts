import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * User entity
 *
 * @export
 * @class User
 */
@Entity()
export class User {

  /**
   * Auto generated ID
   *
   * @type {number}
   * @memberof User
   */
  @PrimaryGeneratedColumn()
  id: number;

  /**
   * User's username
   *
   * @type {string}
   * @memberof User
   */
  @Column()
  username: string;

  /**
   * User's password
   *
   * @type {string}
   * @memberof User
   */
  @Column()
  password: string;

  /**
   * User's display name
   *
   * @type {string}
   * @memberof User
   */
  @Column()
  displayName: string;

  /**
   * User's first name
   *
   * @type {string}
   * @memberof User
   */
  @Column()
  firstName: string;

  /**
   * User's last name
   *
   * @type {string}
   * @memberof User
   */
  @Column()
  lastName: string;
}