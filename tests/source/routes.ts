import Config from 'config';
import Supertest from 'supertest';

const baseUrl =
  `https://127.0.0.1:${Config.get<string>('webserver.httpsPort')}`;

const server: Supertest.SuperTest<Supertest.Test> =
  Supertest.agent(baseUrl);

describe('Route tests', () => {
  describe('W/O Auth', () => {
    beforeAll((done: jest.DoneCallback) =>
      server.post('/logout').end(done));

    it('GET /', (done: jest.DoneCallback) =>
      server.get('/').expect(200, done));

    it('GET /registration', (done: jest.DoneCallback) =>
      server.get('/registration').expect(200, done));

    it('GET /profile', (done: jest.DoneCallback) =>
      server.get('/profile')
        .expect('Location', '/')
        .expect(302, done));

    it('POST /login with missing credentials', (done: jest.DoneCallback) =>
      server.post('/login')
        .expect('Location', '/')
        .expect(302, done));
  });

  describe('W/ Auth', () => {
    beforeAll((done: jest.DoneCallback) => {
      server
        .post('/registration')
        .send({
          regUsername: Config.get<string>('test.fixture.username'),
          regPassword: Config.get<string>('test.fixture.password'),
          regDisplayName: Config.get<string>('test.fixture.displayName')
        }).expect(302, done);
    }, 1000);

    it('GET /', (done: jest.DoneCallback) =>
      server.get('/').expect(302, done));

    it('GET /registration', (done: jest.DoneCallback) =>
      server.get('/').expect(302, done));

    it('GET /profile', (done: jest.DoneCallback) =>
      server.get('/profile').expect(200, done));
  });
});