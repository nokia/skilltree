import { NextFunction, Request, Response } from 'express';

/**
 * Authenticator middleware for view
 * 
 * @param req {Express.Request}
 * @param res {Express.Response}
 * @param next {Express.NextFunction}
 */
export const IsAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.locals.isAuthenticated = req.isAuthenticated();
  if (res.locals.isAuthenticated)
    res.locals.displayName = req.user.displayName;
  next();
};