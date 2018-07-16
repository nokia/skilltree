import BCrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import { Connection, getConnection, Repository } from 'typeorm';

import { User } from '../entities';

/**
 * POST /registration request handler
 * 
 * @param req {Express.Request}
 * @param res {Express.Response}
 * @param next {Express.NextFunction}
 */
export const RegistrationPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // Get database connection what is 
  // already created in the index file
  const dbConnection: Connection =
    getConnection('serverConnection');

  // Connect to the database if disconnected
  if (!dbConnection.isConnected)
    await dbConnection.connect();

  // Create an instance of User repository
  // from database
  const userRepository: Repository<User> =
    dbConnection.getRepository(User);

  // Get the username from the request
  const username: string = req.query.regUsername ||
    req.params.regUsername || req.body.regUsername;

  // Create an instance of User from database
  let user: User = await userRepository.findOne({
    username
  });

  // If user is exist, then display
  // an error to the user
  if (user)
    res.render('registration', {
      message: 'This username is already be claimed!'
    });
  else {
    // Get the password from the request
    const password: string = req.query.regPassword ||
      req.params.regPassword || req.body.regPassword;

    // Create a new password hash
    // from the original password with bcrypt
    const passwordHash: string = BCrypt.hashSync(password, 10);

    // Get the displayName from the request
    const displayName: string = req.query.regDisplayName ||
      req.params.regDisplayName || req.body.regDisplayName;

    // Get the firstName from the request
    const firstName: string = req.query.regFirstName ||
      req.params.regFirstName || req.body.regFirstName;

    // Get the lastName from the request
    const lastName: string = req.query.regLastName ||
      req.params.regLastName || req.body.regLastName;

    // Create an instance of User.
    user = new User();

    // Setup our user properties
    user.username = username.toLowerCase();
    user.password = passwordHash;
    user.displayName = displayName.toLowerCase();
    user.firstName = firstName.toLowerCase();
    user.lastName = lastName.toLowerCase();

    // Try to save our user to the database
    // through our user repository,
    // if it failed then display
    // an error to the user
    userRepository.save(user).then(
      user => req.login(user, (err) => {
        if (!err)
          res.redirect('profile');
        else
          res.render('registration', {
            message: err
          });
      })
    ).catch(reason => res.render('registration', {
      message: reason
    }));
  }
};