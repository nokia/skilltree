import * as Env from 'env-var';
import * as Rs from 'jsrsasign';
import * as Rsu from 'jsrsasign-util';
import * as jwtDecode from 'jwt-decode';

/**
 * The key manager.
 * By: David Zarandi (Azuwey)
 *
 * @class KeyManager
 */
export default class KeyManager {
	private static _instance: KeyManager = new KeyManager(
		Env.get('PRIVATE_KEY_FILE_NAME').asString() || 'key.pem',
		Env.get('PUBLIC_KEY_FILE_NAME').asString() || 'pubkey.pem',
		Env.get('KEY_PASSPHRASE').asString() || 'secret_passpharse'
	);
	private _privateKey: Rs.RSAKey;
	private _publicKey: Rs.RSAKey;

	/**
	 * Constructor.
	 * 
	 * @class KeyManager
	 * @constructor
	 * @param { string = 'key.pem' } privateKeyName
	 * @param { string = 'pubkey.pem' } publicKeyName
	 * @param { string = 'secret_passpharse' } password
	 */
	constructor(privateKeyName: string, publicKeyName: string, password: string) {
		if (KeyManager._instance){
			throw new Error('Error: Instantiation failed: Use KeyManager.getInstance() instead of new.');
		} else {
			KeyManager._instance = this;
			let privatePem = Rsu.readFile(`${__dirname}/../../../${privateKeyName}`);
			let publicPem = Rsu.readFile(`${__dirname}/../../../${publicKeyName}`);
			this._privateKey = Rs.KEYUTIL.getKey(privatePem, password);
			this._publicKey = Rs.KEYUTIL.getKey(publicPem, password);
		}
	}

	/**
	 * Return singleton instance
	 *
	 * @class KeyManager
	 * @method getInstance
	 * @returns KeyManager
	 */
	public static getInstance(): KeyManager {
		return KeyManager._instance;
	}

	/**
	 * Return a generated token by input data
	 *
	 * @class KeyManager
	 * @method generateToken
	 * @param { Object } datas
	 * @returns { string } Token
	 */
	public generateToken(datas: Object): string {
		let alg: string = 'RS256';
		let oHeader: Object = { alg: alg, typ: 'JWT' };
		let tNow: number = Rs.jws.IntDate.get('now');
		let tEnd: number = Rs.jws.IntDate.get('now + 1hour');
		let sHeader: string = JSON.stringify(oHeader);
		let fullObject = JSON.stringify({ ...datas, nbf: tNow, iat: tEnd });
		let sPayload: string = JSON.stringify({ encryptedData: this.encryptText(JSON.stringify(fullObject)) });
		return Rs.jws.JWS.sign(alg, sHeader, sPayload, this._privateKey);
	}

	/**
	 * Return a decrypted object by encrypted token
	 *
	 * @class KeyManager
	 * @method decryptToken
	 * @param { string } datas
	 * @returns { Object } DecryptedObject
	 */
	public decryptToken(datas: string): any {
		try {
			let decodedToken: { encryptedData: string } = jwtDecode(datas);
			return JSON.parse(JSON.parse(this.decryptText(decodedToken.encryptedData)));
		} catch (err) {
			return undefined;
		}
	}

	/**
	 * Return encrypted text by input text
	 *
	 * @class KeyManager
	 * @method encryptText
	 * @param { string } text
	 * @returns { Object } EncryptedToken
	 */
	private encryptText(text: string): string {
		return Rs.crypto.Cipher.encrypt(text, this._publicKey, 'RSA');
	}

	/**
	 * Return decrypted text by input text
	 *
	 * @class KeyManager
	 * @method decryptText
	 * @param { string } ecryptedText
	 * @returns { Object } DecryptedToken
	 */
	private decryptText(ecryptedText: string): string {
		return Rs.crypto.Cipher.decrypt(ecryptedText, this._privateKey);
	}
}