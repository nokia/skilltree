import 'reflect-metadata';

import * as SocketIo from 'socket.io-client';

import { IEdge, ISkill, IUser } from '../../models';
import { User } from '../orm/models/user.model';

/**
 * The SocketIO.
 * By: David Zarandi (Azuwey)
 *
 * @class SocketIO
 */
export class SocketIO {
	private static _instance: SocketIO = new SocketIO();
	private _socket: SocketIo;
	private _timeout: number = 1000;
	private _queryIsRunning: boolean = false;

	/**
	 * Constructor.
	 * 
	 * @class SocketIO
	 * @constructor
	 */
	constructor() {
		if (SocketIO._instance) {
			throw new Error('Error: Instantiation failed: Use SocketIO.getInstance() instead of new.');
		} else {
			SocketIO._instance = this;
			this._socketConnectionSetup();
		}
	}

	/**
	 * Return singleton instance
	 *
	 * @class SocketIO
	 * @method getInstance
	 * @returns SocketIO
	 */
	public static getInstance(): SocketIO {
		return SocketIO._instance;
	}

	/**
	 * Setup socket connection
	 *
	 * @class SocketIO
	 * @method _socketSetup
	 */
	private _socketConnectionSetup(): void {
		let socketAdrress = `ws://${process.env.socketAddress}:${process.env.socketPort}`;
		this._socket = SocketIo(socketAdrress, );
		this._socket.close();
	}

	/**
	 * Emit a login request without token
	 *
	 * @class SocketIO
	 * @param { Function } callback
	 * @method emitLoginWithoutTokenRequest
	 */
	public emitLoginWithoutTokenRequest(user: { username: string, password: string }, callback: Function): void {
		this._socket.on('acceptLogin', (response: { token: string, user: IUser }) => {
			this._socket.removeAllListeners('acceptLogin');
			this._socket.close();
			let timer = setInterval(() => {
				if (!this._socket.connected) {
					clearInterval(timer);
					callback(null, response);
				}
			}, this._timeout);
		});
		this._socket.on('deniedLogin', (errorMessage: string) => {
			this._socket.removeAllListeners('deniedLogin');
			this._socket.close();
			let timer = setInterval(() => {
				if (!this._socket.connected) {
					clearInterval(timer);
					callback(errorMessage, null);
				}
			}, this._timeout);
		});
		this._tryMultiple((errorMessage: string) => {
			if (errorMessage) {
				callback(errorMessage, null);
			} else {
				this._socket.emit('loginWithoutToken', user);
			}
		});
	}

	/**
	 * Emit a login request with token
	 *
	 * @class SocketIO
	 * @param { Function } callback
	 * @method emitLoginWithTokenRequest
	 */
	public emitLoginWithTokenRequest(token: string, callback: Function): void {
		this._socket.on('acceptLogin', (response: { user: IUser }) => {
			this._socket.removeAllListeners('acceptLogin');
			this._socket.close();
			let timer = setInterval(() => {
				if (!this._socket.connected) {
					clearInterval(timer);
					callback(null, response);
				}
			}, this._timeout);
		});
		this._socket.on('deniedLogin', (errorMessage: string) => {
			this._socket.removeAllListeners('deniedLogin');
			this._socket.close();
			let timer = setInterval(() => {
				if (!this._socket.connected) {
					clearInterval(timer);
					callback(errorMessage, null);
				}
			}, this._timeout);
		});
		this._tryMultiple((errorMessage: string) => {
			if (errorMessage) {
				callback(errorMessage, null);
			} else {
				this._socket.emit('loginWithToken', token);
			}
		});
	}

	public findUserByName(name: string, callback: Function) {
		this._socket.on('acceptedFindUserByName', (user: IUser) => {
			this._socket.removeAllListeners('acceptedFindUserByName');
			this._socket.close();
			let timer = setInterval(() => {
				if (!this._socket.connected) {
					clearInterval(timer);
					callback(null, user);
				}
			}, this._timeout);
		});
		this._socket.on('deniedFindUserByName', (errorMessage: string) => {
			this._socket.removeAllListeners('deniedFindUserByName');
			this._socket.close();
			let timer = setInterval(() => {
				if (!this._socket.connected) {
					clearInterval(timer);
					callback(errorMessage, null);
				}
			}, this._timeout);
		});
		this._tryMultiple((errorMessage: string) => {
			if (errorMessage) {
				callback(errorMessage, null);
			} else {
				this._socket.emit('findUserByName', name);
			}
		});
		let timer = setInterval(() => {
			if (!this._socket.connected) {
				clearInterval(timer);
			}
		}, this._timeout);
	}

	public querySkillTree(token: string | undefined, callback: Function) {
		this._socket.on('acceptedSkillTreeQuery', (graph: {
			nodes: ISkill[],
			edges: IEdge[]
		}) => {
			this._queryIsRunning = false;
			this._socket.removeAllListeners('acceptedSkillTreeQuery');
			this._socket.close();
			let timer = setInterval(() => {
				if (!this._socket.connected) {
					clearInterval(timer);
					callback(null, graph);
				}
			}, this._timeout);
		});
		this._socket.on('deniedSkillTreeQuery', (errorMessage: string) => {
			this._socket.removeAllListeners('deniedSkillTreeQuery');
			this._socket.close();
			let timer = setInterval(() => {
				if (!this._socket.connected) {
					clearInterval(timer);
					callback(errorMessage, null);
				}
			}, this._timeout);
		});
		this._tryMultiple((errorMessage: string) => {
			if (errorMessage) {
				callback(errorMessage, null);
			} else {
				this._queryIsRunning = true;
				this._socket.emit('querySkillTree', token);
			}
		});
		let timer = setInterval(() => {
			if (!this._socket.connected) {
				clearInterval(timer);
			}
		}, this._timeout);
	}

	public querySkillTreeWithUsername(username: string | undefined, callback: Function) {
		this._socket.on('acceptedSkillTreeQueryWithUsername', (graph: {
			nodes: ISkill[],
			edges: IEdge[]
		}) => {
			this._queryIsRunning = false;
			this._socket.removeAllListeners('acceptedSkillTreeQueryWithUsername');
			this._socket.close();
			let timer = setInterval(() => {
				if (!this._socket.connected) {
					clearInterval(timer);
					callback(null, graph);
				}
			}, this._timeout);
		});
		this._socket.on('deniedSkillTreeQueryWithUsername', (errorMessage: string) => {
			this._socket.removeAllListeners('deniedSkillTreeQueryWithUsername');
			this._socket.close();
			let timer = setInterval(() => {
				if (!this._socket.connected) {
					clearInterval(timer);
					callback(errorMessage, null);
				}
			}, this._timeout);
		});
		this._tryMultiple((errorMessage: string) => {
			if (errorMessage) {
				callback(errorMessage, null);
			} else {
				this._queryIsRunning = true;
				this._socket.emit('querySkillTreeWithUsername', username);
			}
		});
		let timer = setInterval(() => {
			if (!this._socket.connected) {
				clearInterval(timer);
			}
		}, this._timeout);
	}

	public queryTimeline(token: string | undefined, callback: Function) {
		this._socket.on('acceptTimelineQuery', (events: {
			Message: string, When: Date
		}[]) => {
			this._socket.removeAllListeners('acceptTimelineQuery');
			(!this._queryIsRunning) && this._socket.close();
			let timer = setInterval(() => {
				if (!this._socket.connected) {
					clearInterval(timer);
					callback(null, events);
				}
			}, this._timeout);
		});
		this._socket.on('deniedTimelineQuery', (errorMessage: string) => {
			this._socket.removeAllListeners('deniedTimelineQuery');
			(!this._queryIsRunning) && this._socket.close();
			let timer = setInterval(() => {
				if (!this._socket.connected) {
					clearInterval(timer);
					callback(errorMessage, null);
				}
			}, this._timeout);
		});
		this._tryMultiple((errorMessage: string) => {
			if (errorMessage) {
				callback(errorMessage, null);
			} else {
				this._socket.emit('queryTimeline', token);
			}
		});
	}


	public requestLevelUp(skillId: number, token: string | undefined, callback: Function) {
		this._socket.on('acceptedLevelUp', (node: {
			accepted: boolean,
			skillLevel: number
		}) => {
			this._socket.removeAllListeners('acceptedLevelUp');
			this._socket.close();
			let timer = setInterval(() => {
				if (!this._socket.connected) {
					clearInterval(timer);
					callback(null, node);
				}
			}, this._timeout);
		});
		this._socket.on('deniedLevelUp', (errorMessage: string) => {
			this._socket.removeAllListeners('deniedLevelUp');
			this._socket.close();
			let timer = setInterval(() => {
				if (!this._socket.connected) {
					clearInterval(timer);
					callback(errorMessage, null);
				}
			}, this._timeout);
		});
		this._tryMultiple((errorMessage: string) => {
			if (errorMessage) {
				callback(errorMessage);
			} else {
				let lvlUpRequest: { skillId: number, token: string | undefined } = {
					skillId, token
				}
				this._socket.emit('requestLevelUp', lvlUpRequest);
			}
		});
	}

	public emitAcceptDataShare(token: string | undefined, callback: Function): void {
		this._socket.on('acceptDataShare', () => {
			this._socket.removeAllListeners('acceptDataShare');
			this._socket.close();
			let timer = setInterval(() => {
				if (!this._socket.connected) {
					clearInterval(timer);
					callback(null);
				}
			}, this._timeout);
		});
		this._socket.on('deniedDataShare', (errorMessage: string) => {
			this._socket.removeAllListeners('deniedDataShare');
			this._socket.close();
			let timer = setInterval(() => {
				if (!this._socket.connected) {
					clearInterval(timer);
					callback(errorMessage);
				}
			}, this._timeout);
		});
		this._tryMultiple((errorMessage: string) => {
			if (!errorMessage) {
				this._socket.emit('requestAcceptDataShare', token);
			} else {
				callback(errorMessage);
			}
		});
	}

	public emitRequestAddComment(data: { comment: string, userFrom: string, userTo: string }, callback: Function): void {
		this._socket.on('acceptedComment', (response: { token: string, user: IUser }) => {
			this._socket.removeAllListeners('acceptedComment');
			this._socket.close();
			let timer = setInterval(() => {
				if (!this._socket.connected) {
					clearInterval(timer);
					callback(null, response);
				}
			}, this._timeout);
		});
		this._socket.on('deniedComment', (errorMessage: string) => {
			this._socket.removeAllListeners('deniedComment');
			this._socket.close();
			let timer = setInterval(() => {
				if (!this._socket.connected) {
					clearInterval(timer);
					callback(errorMessage, null);
				}
			}, this._timeout);
		});
		this._tryMultiple((errorMessage: string) => {
			if (errorMessage) {
				callback(errorMessage, null);
			} else {
				this._socket.emit('requestAddComment', data);
			}
		});
	}

	private _tryMultiple(callback: Function, maximumTryCount: number = 5): void {
		!this._socket.connected && this._socket.open();
		let counter = 1;
		let timer = setInterval(() => {
			if (counter >= maximumTryCount) {
				clearInterval(timer);
				this._socket.close();
				callback('Max try count is reached.');
			} else {
				if (this._socket.connected) {
					callback(null);
					clearInterval(timer);
				} else {
					++counter;
				}
			}
		}, this._timeout);
	}
}