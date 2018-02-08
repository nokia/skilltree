import * as Env from 'env-var';
import * as TsLogger from 'ts-log-debug';

/**
 * The logger.
 * By: David Zarandi (Azuwey)
 *
 * @class Logger
 */
export default class Logger {
	private static _instance: Logger = new Logger();
	private _logger: TsLogger.Logger;

	/**
	 * Constructor.
	 * 
	 * @class Logger
	 * @constructor
	 */
	constructor() {
		if (Logger._instance) {
			throw new Error('Error: Instantiation failed: Use Logger.getInstance() instead of new.');
		} else {
			Logger._instance = this;
			this.config(Env.get('LOGGER_LEVEL').asString(), Env.get('LOGGER_NAME').asString());
		}
	}

	/**
	 * Return singleton instance
	 *
	 * @class Logger
	 * @method getInstance
	 * @returns Logger
	 */
	public static getInstance(): Logger {
		return Logger._instance;
	}

	/**
	 * Configure logger
	 *
	 * @class Logger
	 * @method config
	 * @param { string = 'DEBUG' } level
	 * @param { string = 'APP'} name
	 * @returns void
	 */
	private config(level: string = 'DEBUG', name: string = 'APP'): void {
		this._logger = new TsLogger.Logger(name);
		this._logger.appenders
			.set('stdout', { type: 'stdout', level: ['debug', 'info', 'trace'] })
			.set('file', { type: 'file', filename: Env.get('LOGGER_FILE_URL').asString() || 'logfile.log' });
	}

	/**
	 * Show debug message in console
	 *
	 * @class Logger
	 * @method debug
	 * @param { any[] } ...message
	 * @returns void
	 */
	public static debug(...message: any[]): void {
		message.map(value => this._instance._logger.debug(value));
	}

	/**
	 * Show info message in console
	 *
	 * @class Logger
	 * @method info
	 * @param { any[] } ...message
	 * @returns void
	 */
	public static info(...message: any[]): void {
		message.map(value => this._instance._logger.info(value));
	}

	/**
	 * Show trace message in console
	 *
	 * @class Logger
	 * @method trace
	 * @param { any[] } ...message
	 * @returns void
	 */
	public static trace(...message: any[]): void {
		message.map(value => this._instance._logger.trace(value));
	}

	/**
	 * Show error message in console
	 *
	 * @class Logger
	 * @method error
	 * @param { any[] } ...message
	 * @returns void
	 */
	public static error(...message: any[]): void {
		message.map(value => this._instance._logger.error(value));
	}

	/**
	 * Show fatal message in console
	 *
	 * @class Logger
	 * @method fatal
	 * @param { any[] } ...message
	 * @returns void
	 */
	public static fatal(...message: any[]): void {
		message.map(value => this._instance._logger.fatal(value));
	}

	/**
	 * Show warning in console
	 *
	 * @class Logger
	 * @method warn
	 * @param { any[] } ...message
	 * @returns void
	 */
	public static warn(...message: any[]): void {
		message.map(value => this._instance._logger.warn(value));
	}
}