import LocalAuth from 'passport-local';

import { User } from '../entities';

export interface ILocalAuthenticator {
  setupAuthenticator: (
    config: LocalAuth.IStrategyOptions | null,
    callback: () => void
  ) => void;
  authenticator: (
    username: string,
    password: string,
    callback?: (
      error: Error,
      user: User,
      option?: LocalAuth.IVerifyOptions
    ) => void
  ) => void;
}