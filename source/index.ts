import 'reflect-metadata';

import Config from 'config';
import Fs from 'fs';
import Path from 'path';
import { Connection, createConnection } from 'typeorm';

import { LocalAuthenticator } from './authentication';
import { IServerConfig } from './interfaces';
import Server from './server';
import { SkillFixture } from './fixtures';

try {
  (async () => {
    // SSL Private key
    const key: Buffer = Fs.readFileSync(
      Path.resolve(__dirname, "..", "ssl.key"));

    // SSL Certification
    const cert: Buffer = Fs.readFileSync(
      Path.resolve(__dirname, "..", "ssl.crt"));

    // TypeORM database connection
    const connection: Connection = await createConnection({
      ...Config.get<any>("orm"),
      name: "serverConnection",
      entities: [
        Path.resolve(__dirname, "./entities/*.js"),
        Path.resolve(__dirname, "./entities/*.ts")
      ]
    });

    await SkillFixture();

    // Create an instance of
    // Local Passport Authenticator
    const localAuthenticator: LocalAuthenticator =
      new LocalAuthenticator(connection);

    // Setup Local Passport Authenticator
    localAuthenticator.setupAuthenticator({
      ...Config.get<any>("localAuth")
    }, () => {
      // Creates an instance of Server
      const server: Server = new Server(
        Config.get<IServerConfig>("webserver"),
        key,
        cert
      );

      // Start our instance of Server
      server.startServer((error, port) => {
        if (error) console.log(error);
        console.log(`Listening on port: ${port}`);
      });
    });
  })();
} catch (error) {
  console.error(error);
}
