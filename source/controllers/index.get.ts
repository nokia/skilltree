import { NextFunction, Request, Response } from 'express';

/**
 * GET / request handler
 * 
 * @param req {Express.Request}
 * @param res {Express.Response}
 * @param next {Express.NextFunction}
 */
export const IndexGet = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.render('index', {
    message: req.flash('error')
  });
};