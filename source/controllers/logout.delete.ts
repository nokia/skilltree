import { NextFunction, Request, Response } from 'express';

/**
 * DELETE /logout request handler
 * 
 * @param req {Express.Request}
 * @param res {Express.Response}
 * @param next {Express.NextFunction}
 */
export const LogoutDelete = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  req.logout();
  res.redirect('/');
};