import { User } from '../entities';

export interface IBaseAuthenticator {
  serializeUser: (
    user: User,
    callback: (
      error: Error,
      userid?: number
    ) => void
  ) => void;

  deserializeUser: (
    userid: number,
    callback: (
      error: Error,
      user?: User
    ) => void
  ) => void;
}