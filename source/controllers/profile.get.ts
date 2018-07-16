import { NextFunction, Request, Response } from 'express';
import { Connection, getConnection, Repository } from 'typeorm';
import { Skill, User, Level } from '../entities';

/**
 * GET /profile request handler
 * 
 * @param req {Express.Request}
 * @param res {Express.Response}
 * @param next {Express.NextFunction}
 */
export const ProfileGet = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const dbConnection: Connection =
    getConnection('serverConnection');

  // Connect to the database if disconnected
  if (!dbConnection.isConnected)
    await dbConnection.connect();

  // Create an instance of User repository
  // from database
  const userRepository: Repository<User> =
    dbConnection.getRepository(User);

  let owner: User = null;

  const userId: number = req.query.id ||
    req.params.id || req.body.id;

  if (userId)
    owner = await userRepository.findOne(userId);
  else
    // Create an instance of User from database
    owner = await userRepository.findOne({
      ...(req.user)
    });

  // Create an instance of Skill repository
  // from database
  const skillRepository: Repository<Skill> =
    dbConnection.getRepository(Skill);

  const skills: Skill[] = await skillRepository.find({
    relations: [ 'parents' ]
  });

  // Create an instance of Level repository
  // from database
  const levelRepository: Repository<Level> =
    dbConnection.getRepository(Level);

  var _skills: any[] = [];

  await Promise.all(skills.map(async skill => {
    const level: Level = await levelRepository
      .findOne({ owner, skill });
    let currentLevel = 0;
    if (level) {
      currentLevel = level.currentLevel;
    }
    let parents: number[] = [];
    skill.parents.forEach(parent =>
      parents.push(parent.id));
    _skills.push({
      id: skill.id,
      currentLevel,
      parents,
      label: skill.label,
      imageUrl: skill.imageUrl,
      maxLevel: skill.maxLevel,
      description: skill.description,
      links: skill.links
    });
  }));

  res.render('profile', {
    message: req.flash('error'),
    skills: JSON.stringify(_skills),
    displayName: owner.displayName,
    userid: owner.id
  });
};