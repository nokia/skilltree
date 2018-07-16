import BCrypt from 'bcrypt';
import Passport from 'passport';
import LocalAuth from 'passport-local';

import { User } from '../entities';
import { ILocalAuthenticator } from '../interfaces';
import { BaseAuthenticator } from './authenticator';

/**
 * Local authenticator for passport
 *
 * @export
 * @class LocalAuthenticator
 * @extends {BaseAuthenticator}
 * @implements {ILocalAuthenticator}
 */
export class LocalAuthenticator extends BaseAuthenticator implements ILocalAuthenticator {
  /**
   * Setup Passport to use Local Authenticator
   *
   * @param {(LocalAuth.IStrategyOptions | null)} config
   * @param {() => void} callback
   * @memberof LocalAuthenticator
   */
  public setupAuthenticator(
    config: LocalAuth.IStrategyOptions | null,
    callback: () => void
  ) {
    Passport.use(new LocalAuth.Strategy(
      config,
      this.authenticator.bind(this)
    ));
    callback();
  }

  /**
   * Authenticate user from local database
   *
   * @param {string} username
   * @param {string} password
   * @param {( error: Error, user: User, option ? : LocalAuth.IVerifyOptions ) => void} [callback]
   * @memberof LocalAuthenticator
   */
  public authenticator(
    username: string,
    password: string,
    callback?: (
      error: Error,
      user: User,
      option?: LocalAuth.IVerifyOptions
    ) => void
  ) {
    // Create an instance of User repository
    // from database
    const userRepository = this.dbConnection.getRepository(User);

    // Try to find our user in the
    // database with a Username
    userRepository.findOne({
      username: username.toLowerCase()
    }).then(user => {
      // If we found a valid user then compare
      // the password from the request with,
      // what is stored the database.
      // If the password is match with,
      // what is stored the database then
      // deserialize our user, else display an
      // error message to the user.
      if (user && BCrypt.compareSync(password, user.password))
        callback(null, user);
      else
        callback(null, null, {
          message: 'Wrong username or password'
        });
    }).catch(reason => callback(reason, null));
  };
}