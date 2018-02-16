import { get as getCookie, remove as removeCookie, set as setCookie } from 'es-cookie';
import Snackbar from 'material-ui/Snackbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Typography from 'material-ui/Typography';
import * as React from 'react';
import { DOMNode, findDOMNode } from 'react-dom';
import * as ReactObserver from 'react-event-observer';

import { SocketIO } from '../libs/socketIO';
import { IUser } from '../models';
import State from './app.state';
import AppBar from './components/appBar';
import SignedInBar from './components/signedInBar';
import SignedInView from './components/signedInView';
import SignedOutView from './components/signedOutView';
import SignedOutBar from './components/signedOutBar';
import { isBrowser } from './misc';
import DataShareDialog from './components/dataShareDialog';
import { Dark } from './themes';
import { User } from '../libs/orm/models/user.model';

export default class extends React.Component<{}, State> {
	private _connection: SocketIO;
	private _observer: ReactObserver;

	constructor(props) {
		super(props);
		this._observer = ReactObserver();
		this.state = {
			userIsLoggedIn: false,
			user: undefined,
			token: isBrowser ? getCookie('token') : undefined,
			loaded: false,
			errorMessage: '',
			containerSize: { height: 0, width: 0 },
			showDataShareDialog: false
		}
	}

	private _emitLoginRequest(user: { username: string, password: string }) {
		this.setState({ errorMessage: '', loaded: false });
		this._connection = SocketIO.getInstance();
		this._connection.emitLoginWithoutTokenRequest(user,
			this._loginRequestWithoutTokenCallback.bind(this));
	}

	private _loginRequestWithoutTokenCallback(err: string, response: { token: string, user: IUser }) {
		if (!err) {
			if (response.user && response.user.AcceptDataShare) {
				this._loginUser(response.user, () => {
					let date: Date = new Date();
					date.setMinutes(date.getMinutes() + 60);
					setCookie('token', response.token, { expires: date, secure: true });
					this.setState({ token: response.token });
				});
			} else if (response.user && !response.user.AcceptDataShare) {
				this._showDataShareDialog(response.user, () => {
					let date: Date = new Date();
					date.setMinutes(date.getMinutes() + 60);
					setCookie('token', response.token, { expires: date, secure: true });
					this.setState({ token: response.token });
				});
			} else {
				this.setState({ loaded: true });
				removeCookie('token');
				this._observer.publish('_showErrorMessage', 'User is not valid');
			}
		} else {
			this.setState({ loaded: true });
			this._observer.publish('_showErrorMessage', err);
		}
	}

	private _loginRequestWithTokenCallback(err: string, response: { user: IUser }) {
		if (!err) {
			if (response.user && response.user.AcceptDataShare) {
				this._loginUser(response.user);
			} else if (response.user && !response.user.AcceptDataShare) {
				this._showDataShareDialog(response.user);
			} else {
				this.setState({ loaded: true });
				removeCookie('token');
				this._observer.publish('_showErrorMessage', 'User is not valid');
			}
		} else {
			this.setState({ loaded: true });
			this._observer.publish('_showErrorMessage', err);
		}
	}

	private _loginUser(user: IUser, callback?: Function) {
		this.setState({ userIsLoggedIn: true, user: user });
		(callback) && callback();
		this.setState({ loaded: true });
	}

	private _showDataShareDialog(user: IUser, callback?: Function) {
		this.setState({ showDataShareDialog: true, user: user });
		(callback) && callback();
	}

	private _logout() {
		removeCookie('token');
		this.setState({ userIsLoggedIn: false, user: undefined, token: undefined });
	}

	private _calculateContainerSize() {
		let appBarDOMNode: DOMNode = findDOMNode(this.refs.AppBar);
		let height: number = window.innerHeight - appBarDOMNode.clientHeight;
		let width: number = appBarDOMNode.clientWidth;
		let containerSize: { height: number, width: number } = { height, width };
		this.setState({ containerSize });
	}

	private _showErrorMessage(errorMessage: string) {
		this.setState({ errorMessage: errorMessage });
	}

	private _emitSkillTreeRequest() {
		this._connection.querySkillTree(this.state.token, (err, graph) => {
			if (!err) {
				this._observer.publish('_skillTreeRequest', graph);
				this._emitTimelineRequest();
			} else {
				this._observer.publish('_showErrorMessage', err);
			}
		});
	}

	private _findUserByName(name: string) {
		this._connection.findUserByName(name, (err, user) => {
			if (!err) {
				this._observer.publish('_findUserRequest', user);
			} else {
				this._observer.publish('_showErrorMessage', err);
				this._observer.publish('_userNotfound');
			}
		});
	}

	private _requestLevelUp(skillId: number) {
		this._connection.requestLevelUp(skillId, this.state.token, (err, node) => {
			if (!err) {
				this._observer.publish('_levelUpRequest', {
					err: null,
					node: node
				});
				this._emitTimelineRequest();
			} else {
				this._observer.publish('_levelUpRequest', {
					err: err,
					node: null
				});
			}
		});
	}

	private _requestAddComment(data: {comment: string, userFrom: string, userTo: string}) {
		this._connection.emitRequestAddComment( data ,(err, comment) => {
		});
	}

	private _emitAcceptDataShare() {
		this._connection.emitAcceptDataShare(this.state.token, err => {
			if (!err && this.state.user) {
				this.state.user.AcceptDataShare = true;
				this._loginUser(this.state.user);
			} else {
				this._logout();
				this._observer.publish('_showErrorMessage', err);
			}
		});
	}

	private _emitTimelineRequest() {
		this._connection.queryTimeline(this.state.token, (err, events) => {
			if (!err) {
				this._observer.publish('_timelineRequest', events);
			} else {
				this._observer.publish('_showErrorMessage', err);
			}
		});
	}

	private _emitEndorsmentsRequest() {
		this._connection.queryEndorsments(this.state.token, (err, endorsments) => {
			if (!err) {
				this._observer.publish('_endorsmentsRequest', endorsments);
			} else {
				this._observer.publish('_showErrorMessage', err);
			}
		});
	}

	private _emitSkillTreeRequestWithUsername(username: string) {
		this._connection.querySkillTreeWithUsername(username, (err, graph) => {
			if (!err) {
				this._observer.publish('_skillTreeRequest', graph);
			} else {
				this._observer.publish('_showErrorMessage', err);
			}
		});
	}

	public componentDidMount() {
		this._observer.subscribe('_logout', this._logout.bind(this));
		this._observer.subscribe('_emitLoginRequest', this._emitLoginRequest.bind(this));
		this._observer.subscribe('_showErrorMessage', this._showErrorMessage.bind(this));
		this._observer.subscribe('_emitSkillTreeRequestWithoutUsername', this._emitSkillTreeRequest.bind(this));
		this._observer.subscribe('_requestLevelUp', this._requestLevelUp.bind(this));
		this._observer.subscribe('_requestAddComment!', this._requestAddComment.bind(this));
		this._observer.subscribe('_emitAcceptDataShare', this._emitAcceptDataShare.bind(this));
		this._observer.subscribe('_findUserByName', this._findUserByName.bind(this));
		this._observer.subscribe('_emitSkillTreeRequestWithUsername',
			this._emitSkillTreeRequestWithUsername.bind(this));
		window.addEventListener('resize', this._calculateContainerSize.bind(this));
		this._calculateContainerSize();
		this.setState({ token: getCookie('token') });
		this._connection = SocketIO.getInstance();
		if (this.state.token) {
			this._connection.emitLoginWithTokenRequest(this.state.token,
				this._loginRequestWithTokenCallback.bind(this));
		} else {
			this.setState({ loaded: true });
		}
	}

	public componentWillUnmount() {
		this._observer.unsubscribe('_emitLoginRequest');
		this._observer.unsubscribe('_logout');
		this._observer.unsubscribe('_showErrorMessage');
		this._observer.unsubscribe('_emitSkillTreeRequestWithoutUsername');
		this._observer.unsubscribe('_requestLevelUp');
		this._observer.unsubscribe('_addComment');
		this._observer.unsubscribe('_emitAcceptDataShare');
		this._observer.unsubscribe('_findUserByName');
		this._observer.unsubscribe('_emitSkillTreeRequestWithUsername');
	}

	public render() {
		if (this.state.errorMessage !== '') {
			setTimeout(() => {
				this.setState({ errorMessage: '' });
			}, 5000);
		} else {
			//Do nothing
		}
		return (<MuiThemeProvider theme={Dark}>
			<AppBar ref='AppBar' title='Skill Tree'>
				{!this.state.loaded
					? <main>Loading...</main>
					: (!this.state.user
						? <SignedOutBar observer={this._observer} />
						: <SignedInBar observer={this._observer} />)
				}
			</AppBar>
			{!this.state.user
				? <SignedOutView containerSize={this.state.containerSize} />
				: (this.state.user && this.state.user.AcceptDataShare
					? <SignedInView observer={this._observer} user={this.state.user}
						containerSize={this.state.containerSize} token={this.state.token} />
					: <DataShareDialog observer={this._observer} />
				)
			}
			<Snackbar
				open={this.state.errorMessage !== ''}
				message={<Typography noWrap color='inherit'>
					{this.state.errorMessage}
				</Typography>}
			/>
		</MuiThemeProvider>)
	}
}

/*

*/