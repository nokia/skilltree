import { NextFunction, Request, Response } from 'express';

/**
 * GET /registration request handler
 * 
 * @param req {Express.Request}
 * @param res {Express.Response}
 * @param next {Express.NextFunction}
 */
export const RegistrationGet = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.render('registration', {
    message: req.flash('error')
  });
};