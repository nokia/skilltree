import Config from 'config';
import Express from 'express';
import Session from 'express-session';
import Http from 'http';
import Passport from 'passport';
import Spdy from 'spdy';

import { IServerConfig } from './interfaces';
import Router from './router';

/**
 * HTTP1.1 express web server with
 * Spdy HTTP2 web server
 *
 * @export
 * @class Server
 */
export default class Server {
  private readonly app: Express.Application = Express();
  private httpServer: Http.Server;
  private httpsServer: Spdy.Server;

  /**
   * Creates an instance of Server.
   * 
   * @param {IServerConfig} serverConfig
   * @param {Buffer} sslKey
   * @param {Buffer} sslCert
   * @memberof Server
   */
  constructor(
    private serverConfig: IServerConfig,
    private sslKey: Buffer,
    private sslCert: Buffer
  ) {
    this.setupView();
    this.setupStaticHost();
    this.setupBodyParsing();
    this.setupSessionHandling();
    this.setupFlashMessageHandling();
    this.setupCookieHandling();
    this.setupAuthorization();
    this.setupRouter();
    this.setupHttpServer();
    this.setupHttpsServer();
  }

  /**
   * Setup express view engine with view Path
   *
   * @private
   * @memberof Server
   */
  private setupView() {
    this.serverConfig.viewEngine &&
      this.app.set('view engine', this.serverConfig.viewEngine);
    this.serverConfig.viewPath &&
      this.app.set('views', this.serverConfig.viewPath);
  }

  /**
   * Setup express static file host
   *
   * @private
   * @memberof Server
   */
  private setupStaticHost() {
    this.app.use('/static', Express
      .static(this.serverConfig.staticPath));
  }

  /**
   * Setup parse incoming request
   * bodies in a middleware
   *
   * @private
   * @memberof Server
   */
  private setupBodyParsing() {
    this.app.use(require('body-parser').json());
    this.app.use(require('body-parser').urlencoded({
      extended: false
    }));
  }

  /**
   * Setup express server session handling
   *
   * @private
   * @memberof Server
   */
  private setupSessionHandling() {
    this.app.use(Session({
      secret: this.serverConfig.secret,
      store: require('sessionstore').createSessionStore(
        Config.get<any>('sessionstore')),
      resave: false,
      saveUninitialized: false
    }));
  }

  /**
   * Setup a middleware for creating flash messages
   *
   * @private
   * @memberof Server
   */
  private setupFlashMessageHandling() {
    this.app.use(require('req-flash')());
  }

  /**
   * Setup express server cookie handling
   *
   * @private
   * @memberof Server
   */
  private setupCookieHandling() {
    this.app.use(require('cookie-parser')(
      this.serverConfig.secret
    ));
  }

  /**
   * Setup user authorization with passport
   *
   * @private
   * @memberof Server
   */
  private setupAuthorization() {
    this.app.use(Passport.initialize());
    this.app.use(Passport.session());
  }

  /**
   * Setup express server router
   *
   * @private
   * @memberof Server
   */
  private setupRouter() {
    this.app.use(Router);
  }

  /**
   * Setup HTTP Webserver
   *
   * @private
   * @memberof Server
   */
  private setupHttpServer() {
    this.httpServer =
      Http.createServer(this.httpHander.bind(this));
  }

  /**
   * HTTP handler
   * Redirect HTTP request to HTTPS
   *
   * @private
   * @param {Http.IncomingMessage} req
   * @param {Http.ServerResponse} res
   * @memberof Server
   */
  private httpHander(
    request: Http.IncomingMessage,
    response: Http.ServerResponse
  ) {
    response.writeHead(301, {
      "Location": "https://" + request.headers['host']
        .replace(`${this.serverConfig.httpPort}`,
          `${this.serverConfig.httpsPort}`) + request.url
    });
    response.end();
  }

  /**
   * Setup HTTPS Webserver
   *
   * @private
   * @param {Buffer} sslKey
   * @param {Buffer} sslCert
   * @memberof Server
   */
  private setupHttpsServer(
  ) {
    this.httpsServer = Spdy.createServer({
      key: this.sslKey,
      cert: this.sslCert
    }, this.app);
  }

  /**
   * Start the HTTP and HTTPS server
   * with SSL key and cert
   *
   * @param {(error: Error, port?: number) => void} [callback]
   * @memberof Server
   */
  public startServer(
    callback?: (error: Error, port?: number) => void
  ) {
    this.httpServer.listen(this.serverConfig.httpPort);
    this.httpsServer.listen(this.serverConfig.httpsPort,
      (error: Error) => {
        if (error)
          callback(error);
        callback(null, this.serverConfig.httpsPort);
      });
  }
}