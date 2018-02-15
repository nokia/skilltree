import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import * as React from 'react';
import Button from 'material-ui/Button';
import Props from './signedOutBar.props';
import Style from './signedOutBar.style';
import State from './signedOutBar.state';
import Input from 'material-ui/Input';
import { isBrowser } from '../../misc';

export default class extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		}
	}

	_handleChange = name => event => {
		this.setState({ [name]: event.target.value });
	}

	_usernameValidator = (): boolean => {
		if (this.state.username.trim().length < 4) {
			return false;
		} else {
			return true;
		}
	}

	_passwordValidator = (): boolean => {
		if (this.state.password.length < 4) {
			return false;
		} else {
			return true;
		}
	}

	_keyPressHandler(event) {
		if (event.key === 'Enter') {
			(this._usernameValidator() &&
				this._passwordValidator()) && this._publishEmitLoginRequest();
			event.preventDefault();
		} else {
			// Do nothing
		}
	}

	_publishEmitLoginRequest() {
		this.props.observer.publish('_emitLoginRequest', { ...this.state });
	}

	render() {
		return (<main>
			<Input placeholder='Username' style={Style.input}
				autoFocus value={this.state.username} onChange={this._handleChange('username')}
				autoComplete='off' type='text' error={!this._usernameValidator()} />
			<Input placeholder='Password' style={Style.input} value={this.state.password}
				onKeyPress={this._keyPressHandler.bind(this)}
				onChange={this._handleChange('password')} autoComplete='off'
				type='password' error={!this._passwordValidator()} />
			<Button onClick={this._publishEmitLoginRequest.bind(this)}
				color='inherit'
				disabled={!this._usernameValidator() || !this._passwordValidator() || !isBrowser}>
				Login
			</Button>
		</main>);
	}
}