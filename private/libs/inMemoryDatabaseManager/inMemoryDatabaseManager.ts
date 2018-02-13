import * as Env from 'env-var';
import * as TinyCache from 'tinycache'

/**
 * The in-memory Database Manager
 * By: Ujvari Balint
 *
 * @class KeyManager
 */
export default class InMemoryDatabaseManager {
	private static _instance: InMemoryDatabaseManager = new InMemoryDatabaseManager();
	private _cache: any;
	/**
	 * Constructor.
	 * 
	 * @class InMemoryDatabaseManager
	 * @constructor
	 */
	constructor() {
		if (InMemoryDatabaseManager._instance) {
			throw new Error('Error: Instantiation failed: Use InMemoryDatabaseManager.getInstance() instead of new.');
		} else {
			InMemoryDatabaseManager._instance = this;
			this._cache = new TinyCache();
		}
	}

	/**
	 * Return singleton instance
	 *
	 * @class InMemoryDatabaseManager
	 * @method getInstance
	 * @returns InMemoryDatabaseManager
	 */
	public static getInstance(): InMemoryDatabaseManager {
		return InMemoryDatabaseManager._instance;
	}

	public setCacheByName(name: string, id: string) {
		if(this.getCacheByName(name)) {
			this._cache.del(name);
			this.setCacheByName(name, id);
		} else {
			this._cache.put(name, id);
		}
	}

	public getCacheByName(name: string) {
		return this._cache.get(name);
	}
}