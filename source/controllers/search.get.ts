import { NextFunction, Request, Response } from 'express';
import { Connection, getConnection, Repository } from 'typeorm';

import { User } from '../entities';

/**
 * GET /search handler
 * 
 * @param req {Express.Request}
 * @param res {Express.Response}
 * @param next {Express.NextFunction}
 */
export const SearchGet = async (
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

  // Get the searchParam from the request
  var searchParam: string = (req.query.searchParam ||
    req.params.searchParam || req.body.searchParam);
  
  searchParam = searchParam.trim().toLowerCase();

  // Create an instance of User from database
  let users: User[] = [];

  users = users.concat(await userRepository.find({
    displayName: searchParam
  }), await userRepository.find({
    lastName: searchParam
  }), await userRepository.find({
    firstName: searchParam
  }));

  let _users: any = [];
  users.forEach(user => {
    if (_users.findIndex((_user: any) => _user.id === user.id) === -1) {
      _users.push({
        id: user.id,
        firstName: user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1),
        lastName: user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1),
        displayName: user.displayName.charAt(0).toUpperCase() + user.displayName.slice(1),
      });
    }
  });

  res.render('search', {
    message: req.flash('error'),
    users: _users
  });
};