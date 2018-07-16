export interface IServerConfig {
  httpPort: number;
  httpsPort: number;
  secret: string;
  viewPath: string;
  viewEngine: string;
  staticPath: string;
}