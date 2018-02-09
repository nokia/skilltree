import { get as getCookie, remove as removeCookie, set as setCookie } from 'es-cookie';
import Snackbar from 'material-ui/Snackbar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Typography from 'material-ui/Typography';
import * as React from 'react';
import * as ReactObserver from 'react-event-observer';

import { SocketIO } from '../libs/socketIO';
import { IUser } from '../models';
import State from './app.state';
import AppBar from './components/appBar';
import SignedInBar from './components/signedInBar';
import SignedInView from './components/signedInView';
import SignedOutBar from './components/signedOutBar';
import { isBrowser } from './misc';
import { Dark } from './themes';
import { findDOMNode, DOMNode } from 'react-dom';

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
			containerSize: { height: 0, width: 0 }
		}
	}

	private _emitLoginRequest(user: { username: string, password: string }) {
		this.setState({ errorMessage: '', loaded: false });
		this._connection = SocketIO.getInstance();
		this._connection.emitLoginWithoutTokenRequest(user,
			this._loginRequestWithoutTokenCallback.bind(this));
	}

	private _loginRequestWithoutTokenCallback(error: string, response: { token: string, user: IUser }) {
		if (error) {
			this.setState({ errorMessage: error });
		} else {
			if (response.user) {
				this.setState({ userIsLoggedIn: true, user: response.user });
				let date: Date = new Date();
				date.setMinutes(date.getMinutes() + 60);
				setCookie('token', response.token, { expires: date });
			} else {
				this.setState({ errorMessage: 'Wrong username or password' });
			}
		}
		this.setState({ loaded: true });
	}

	private _loginRequestWithTokenCallback(error: string, response: { user: IUser }) {
		if (error) {
			removeCookie('token');
			this.setState({ errorMessage: error });
		} else {
			if (response.user) {
				this.setState({ userIsLoggedIn: true, user: response.user });
				
			} else {
				removeCookie('token');
				this.setState({ errorMessage: 'User is not valid' });
			}
		}
		this.setState({ loaded: true });
	}

	private _logout() {
		removeCookie('token');
		this.setState({ userIsLoggedIn: false, user: undefined });
	}

	private _calculateContainerHeight() {
		let appBarDOMNode: DOMNode = findDOMNode(this.refs.AppBar);
		let height: number = window.innerHeight - appBarDOMNode.clientHeight;
		let width: number = appBarDOMNode.clientWidth;
		let containerSize: { height: number, width: number } = { height, width };
		this.setState({ containerSize });
	}

	public componentDidMount() {
		this._calculateContainerHeight();
		this.setState({ token: getCookie('token') });
		if (this.state.token) {
			this._connection = SocketIO.getInstance();
			this._connection.emitLoginWithTokenRequest(this.state.token,
				this._loginRequestWithTokenCallback.bind(this));
		} else {
			this.setState({ loaded: true });
		}
		this._observer.subscribe('_logout', this._logout.bind(this));
		this._observer.subscribe('_emitLoginRequest', this._emitLoginRequest.bind(this));
	}

	public componentWillUnmount() {
		this._observer.unsubscribe('_emitLoginRequest');
		this._observer.unsubscribe('_logout');
	}

	public render() {
		if (this.state.errorMessage !== '') {
			setTimeout(() => {
				this.setState({ errorMessage: '' });
			}, 5000);
		} else {
			//Do nothing
		}
		return (<MuiThemeProvider theme={ Dark }>
			<AppBar ref='AppBar' title='Skill Tree'>
				{ !this.state.loaded
				? <main>Loading...</main>
				: (!this.state.user
					? <SignedOutBar observer={ this._observer } />
					: <SignedInBar observer={ this._observer } /> )
				}
			</AppBar>
			{ !this.state.user
				? <div></div>
				: <SignedInView observer={ this._observer }
					containerSize={ this.state.containerSize } />
			}
			<Snackbar
				open={ this.state.errorMessage !== '' }
				message={<Typography noWrap color='inherit'>
					{ this.state.errorMessage }
				</Typography>}
			/>
		</MuiThemeProvider>)
	}
}

//console.log(`http://whereareyou.eecloud.dynamic.nsn-net.net/user/${this.state.user.Username}`);