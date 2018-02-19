import * as Env from 'env-var';
import * as TinyCache from 'tinycache'

/**
 * The in-memory Database Manager
 * 
 * This .ts file contains the necessary functions for communicating with
 * the in-memory database provided by the `tinycache` package. 
 * First one has to import this file and instanciate it, 
 * then the setCacheByName and getCacheByName functions will be available for use.
 * 
 *Example:
 * 
 * -- Import: --
 * import InMemoryDatabaseManager from '../ExampleLibrary/inMemoryDatabaseManager';
 * 
 * -- Instantiate: --
 * export class ExampleClass{
 * private _inMemoryDatabaseManager: InMemoryDatabaseManager = InMemoryDatabaseManager.getInstance();
 * }
 * 
 * -- Use: --
 * this._inMemoryDatabaseManager.setCacheByName(ExampleKey, ExampleValue);
 * 
 * By: Ujvari Balint
 *
 * @class InMemoryDatabaseManager
 */
export default class InMemoryDatabaseManager {
	private static _instance: InMemoryDatabaseManager = new InMemoryDatabaseManager();
	private _cache: any;
	
	/**
	 * Constructor.
	 * Throws an error if instantiating a new InMemoryDatabaseManager._instance is attempted 
	 * while one already exists, hence it becomes a singleton instance. If it hasn't been instantiated
	 * yet, it creates a new one.
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
	 * Returns an instance of InMemoryDatabaseManager
	 *
	 * @class InMemoryDatabaseManager
	 * @method getInstance
	 * @returns InMemoryDatabaseManager
	 */
	public static getInstance(): InMemoryDatabaseManager {
		return InMemoryDatabaseManager._instance;
	}


	/**
	 * Recieves the key and value strings as input parameters,
	 * first checks whether the _cache imdb already contains that name,
	 * if so, it deletes the existing data and replaces it with a new value,
	 * else it just inserts the new data into the imdb.
	 *
	 * @class InMemoryDatabaseManager
	 * @method setCacheByKey
	 * @param string key
	 * @param string value
	 */
	public setCacheByKey(key: string, value: string) {
		if(this.getCacheByKey(key)) {
			this._cache.del(key);
			this.setCacheByKey(key, value);
		} else {
			this._cache.put(key, value);
		}
	}

	/**
	 * Returns the value ( the id ) of the key ( the name ) given as input
	 * from the imdb.
	 *
	 * @class InMemoryDatabaseManager
	 * @method setCacheByKey
	 * @param string key
	 * @returns id
	 */

	public getCacheByKey(name: string) {
		return this._cache.get(name);
	}
}