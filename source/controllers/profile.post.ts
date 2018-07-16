import { NextFunction, Request, Response } from 'express';
import { Connection, getConnection } from 'typeorm';

import { Level, Skill, User } from '../entities';

/**
 * POST /profile request handler
 * 
 * @param req {Express.Request}
 * @param res {Express.Response}
 * @param next {Express.NextFunction}
 */
export const ProfilePost = async (
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
  // from the database
  const userRepository =
    dbConnection.getRepository(User);

  // Create an instance of User from the database
  let owner: User = await userRepository.findOne({ ...(req.user) });

  const userId: number = req.query.userId ||
    req.params.userId || req.body.userId;

  // Create an instance of User from the database
  let user: User = await userRepository.findOne(userId);

  if (owner && user && owner.id === user.id) {
    // Get the skillId from the request
    const skillId: string = req.query.skillId ||
      req.params.skillId || req.body.skillId;

    // Create an instance of Skill repository
    // from the database
    const skillRepository =
      dbConnection.getRepository(Skill);

    const skill: Skill = await skillRepository.findOne(skillId);

    if (skill) {

      // Create an instance of Level repository
      // from the database
      const levelRepository =
        dbConnection.getRepository(Level);

      // Create an instance of Level from the database
      let level: Level = await levelRepository.findOne({
        where: { skill, owner }
      }) || new Level();

      if (level.owner !== owner)
        level.owner = owner;

      if (level.skill !== skill)
        level.skill = skill;

      // Get the levelRequest from the request
      const levelRequest: number = req.query.levelRequest ||
        req.params.levelRequest || req.body.levelRequest;

      level.currentLevel = levelRequest;

      // Try to update our level in the database
      dbConnection.manager.save(level)
        .then(() => res.sendStatus(200))
        .catch(reason => res.status(500).send(reason));
    } else {
      res.sendStatus(402);
    }
  } else {
    res.sendStatus(403);
  }
};