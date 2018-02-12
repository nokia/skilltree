import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog/Dialog';
import DialogActions from 'material-ui/Dialog/DialogActions';
import DialogContent from 'material-ui/Dialog/DialogContent';
import DialogContentText from 'material-ui/Dialog/DialogContentText';
import DialogTitle from 'material-ui/Dialog/DialogTitle';
import * as React from 'react';

import Props from './dataShareDialog.props';
import State from './dataShareDialog.state';

export default class extends React.Component<Props, State> {
	constructor(props) {
		super(props);
	}

	private _emitAcceptDataShare() {
		this.props.observer.publish('_emitAcceptDataShare');
	}

	render() {
		return (
			<Dialog open={true}>
				<DialogTitle>
					Data share
					</DialogTitle>
				<DialogContent>
					<DialogContentText>
						By clicking the "I Agree" button below you expressly give
						your consents as described below:
						</DialogContentText>
					<DialogContentText>
						Share my skills, competence, endorsements related data
						with other Nokia employees, what I entered to the skill tree portal.
						</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button color='primary' onClick={this._emitAcceptDataShare.bind(this)}>
						I Agree
					</Button>
				</DialogActions>
			</Dialog>
		);
	}
}