import * as Env from 'env-var';
import * as Ldapjs from 'ldapjs';
import Logger from '../logger/logger';

export default class LdapRequest {
	private static _instance: LdapRequest = new LdapRequest(
		Env.get('LDAP_URL').required().asString()
	);
	private _client: Ldapjs.Client;

	/**
	 * Constructor.
	 * 
	 * @class DatabaseManager
	 * @param { string } ldapUrl
	 * @constructor
	 */
	constructor(ldapUrl: string) {
		if (LdapRequest._instance){
			throw new Error('Error: Instantiation failed: Use LdapRequest.getInstance() instead of new.');
		} else {
			this._client = Ldapjs.createClient({ url: ldapUrl });
		}
	}

	/**
	 * Return singleton instance
	 *
	 * @class LdapRequest
	 * @method getInstance
	 * @returns LdapRequest
	 */
	public static getInstance(): LdapRequest {
		return LdapRequest._instance;
	}

	/**
	 * Request LDAP login by username and password
	 * 
	 * @class KeyManager
	 * @method requestLogin
	 * @param { <username: string, password: string> } user
	 * @param { Function(error, user) } callback
	 */
	public requestLogin(user: { username: string, password: string }, callback: Function) {
		let opts = {
			filter: `(uid=${user.username})`,
			scope: 'sub',
			attributes: ['dn','cn', 'name']
		}
		this._client.search('o=NSN', opts, (err, res) => {
			if (!err) {
				let userIsExist = false;
				res.on('searchEntry', (entry) => {
					console.log(entry.object)
					userIsExist = true;
					this._client.bind(entry.object.dn, user.password, (err) => {
						if (err === null) {
							callback(null, entry.object);
						} else {
							callback('Wrong password or username', null);
						}
					});
				});
				res.on('end', (result) => {
					!userIsExist && callback('Wrong password or username', null);
				});
			} else {
				Logger.error(err);
				callback(err, null);
			}
		});
	}
}