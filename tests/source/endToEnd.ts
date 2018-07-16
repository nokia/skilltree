import Config from 'config';
import Fs from 'fs';
import WebDriver, { By, until } from 'selenium-webdriver';

const baseUrl =
  `https://127.0.0.1:${Config.get<string>('webserver.httpsPort')}`;

describe('End-to-end tests', () => {
  const driver: WebDriver.ThenableWebDriver = new WebDriver.Builder()
    .usingServer('http://localhost:4444/wd/hub')
    .forBrowser('chrome')
    .build();
  afterAll((done: jest.DoneCallback) => {
    driver.quit()
      .then(done)
      .catch(reason => done(reason));
  });

  it('Open registration page and register a user with test datas',
    async (done: jest.DoneCallback) => {
      try {
        await driver.manage().deleteAllCookies();
        await driver.get(`${baseUrl}/registration`);
        await driver.findElement(By.css('input[name="regUsername"]'))
          .sendKeys(`${Config.get<string>('test.fixture.username')}a`);
        await driver.findElement(By.css('input[name="regPassword"]'))
          .sendKeys(`${Config.get<string>('test.fixture.password')}a`);
        await driver.findElement(By.css('input[name="regDisplayName"]'))
          .sendKeys(`${Config.get<string>('test.fixture.displayName')}a`);
        await driver.findElement(By.css('button[name="registration"]'))
          .click();
        await driver.wait(
          until.urlIs(`${baseUrl}/profile`), 1000);
        done();
      } catch (error) {
        done(error);
      } finally {
        Fs.writeFile('screenshots/registration.png', await driver.takeScreenshot(),
          'base64', (err) => err && console.log(err));
      }
    });

  it('Open index page and login with test datas',
    async (done: jest.DoneCallback) => {
      try {
        await driver.manage().deleteAllCookies();
        await driver.get(baseUrl);
        await driver.findElement(By.css('input[name="username"]'))
          .sendKeys(Config.get<string>('test.fixture.username'));
        await driver.findElement(By.css('input[name="password"]'))
          .sendKeys(Config.get<string>('test.fixture.password'));
        await driver.findElement(By.css('button[name="login"]'))
          .click();
        await driver.wait(
          until.urlIs(`${baseUrl}/profile`), 1000);
        done();
      } catch (error) {
        done(error);
      } finally {
        Fs.writeFile('screenshots/login.png', await driver.takeScreenshot(),
          'base64', (err) => err && console.log(err));
      }
    });
});