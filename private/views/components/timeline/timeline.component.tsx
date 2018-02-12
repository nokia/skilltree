import * as React from 'react';
import NodeGraph from 'react-graph-vis';
import { isArray, isUndefined } from 'util';

import Props from './timeline.props';
import State from './timeline.state';
import Dialog from 'material-ui/Dialog/Dialog';
import DialogTitle from 'material-ui/Dialog/DialogTitle';
import DialogContent from 'material-ui/Dialog/DialogContent';
import DialogContentText from 'material-ui/Dialog/DialogContentText';
import DialogActions from 'material-ui/Dialog/DialogActions';
import Button from 'material-ui/Button/Button';
import withMobileDialog from 'material-ui/Dialog/withMobileDialog';

export default class extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
			events: []
		}
	}

	public componentWillUnmount() {
		this.props.observer.unsubscribe('_timelineRequest');
	}

	private _timelineRequestCallback(events: {
		Message: string,
		When: Date
	}[]) {
		console.log('sad');
		console.log(events);
		this.setState({ events });
	}

	public componentDidMount() {
		this.props.observer.subscribe('_timelineRequest',
				this._timelineRequestCallback.bind(this));
	}

	public render() {
		return (
			<main style={this.props.style} >
				{this.state.events.map((event, index) => {
					return <div key={index}>{event.Message}</div>
				})}
			</main>
		);
	}
}