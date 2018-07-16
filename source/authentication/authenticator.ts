import Passport from 'passport';
import { Connection } from 'typeorm';

import { User } from '../entities';
import { IBaseAuthenticator } from '../interfaces';

/**
 * Base authenticator for passport
 *
 * @export
 * @abstract
 * @class BaseAuthenticator
 * @implements {IBaseAuthenticator}
 */
export abstract class BaseAuthenticator implements IBaseAuthenticator {
  /**
   *Creates an instance of BaseAuthenticator
   * @param {Connection} dbConnection
   * @memberof BaseAuthenticator
   */
  constructor(
    protected dbConnection: Connection
  ) {
    if (!dbConnection.isConnected)
      throw new Error('Database is disconnected!');
    Passport.serializeUser(this.serializeUser.bind(this));
    Passport.deserializeUser(this.deserializeUser.bind(this));
  }


  /**
   * Serialize User to an ID number
   *
   * @param {User} user
   * @param {(error: Error, userid?: number) => void} callback
   * @memberof BaseAuthenticator
   */
  public serializeUser(
    user: User,
    callback: (error: Error, userid?: number) => void
  ) {
    callback(null, user.id);
  };

  /**
   * Deserialize User ID from the database
   *
   * @param {number} userid
   * @param {(error: Error, user?: User) => void} callback
   * @memberof BaseAuthenticator
   */
  public deserializeUser(
    userid: number,
    callback: (error: Error, user?: User) => void
  ) {
    // Create an instance of User repository
    // from database
    let userRepository =
      this.dbConnection.getRepository(User);

    // Try to find our user in the
    // database with an ID
    userRepository.findOne(userid)
      .then(user => callback(null, user))
      .catch(reason => callback(reason));
  };
}