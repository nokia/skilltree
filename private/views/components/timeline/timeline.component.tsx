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
import { List, ListItem, ListItemText } from 'material-ui';
import LoadingView from '../loadingView';

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
		this.setState({ events });
	}

	public componentDidMount() {
		this.props.observer.subscribe('_timelineRequest',
			this._timelineRequestCallback.bind(this));
	}

	public render() {
		return (this.state.events.length > 0 ? <main style={this.props.style}>
			<List component="nav">
				{this.state.events.map((event, index) => {
					return (<ListItem key={index}>
						<ListItemText primary={event.Message}
							secondary={new Date(event.When).toLocaleDateString()} />
					</ListItem>);
				}).reverse()}
			</List>
		</main> : <LoadingView style={this.props.style} />);
	}
}