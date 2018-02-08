import * as React from 'react';
import NodeGraph from 'react-graph-vis';
import { isArray, isUndefined } from 'util';

import Options from './skillTree.options';
import Props from './skillTree.props';
import State from './skillTree.state';
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
			graph: { nodes: [], edges: [] },
			options: Options
		}
	}

	public componentWillMount() {
		this.props.observer.subscribe('_skillTreeRequest',
			this._skillTreeRequestCallback.bind(this));
		this.props.observer.publish('_emitSkillTreeRequest');
	}

	public componentWillUnmount() {
		this.props.observer.unsubscribe('_skillTreeRequest');
	}

	private _skillTreeRequestCallback(graph: {
		nodes: {
			id: number,
			label: string,
			image: string,
			description: string
		}[],
		edges: { from: number, to: number }[]
	}) {
		console.log(graph.nodes)
		this.setState({ graph });
	}

	private _selectHandler(events) {
		if (!isUndefined(events.nodes[0]) && !isUndefined(this.state.graph['nodes'])
			&& isArray(this.state.graph['nodes'])) {
			let nodes = this.state.graph['nodes'].filter(node => node.id === events.nodes[0]);
			if (nodes.length > 0) {
				nodes.forEach(node => {
					this.props.observer.publish('_nodeEvent', node);
				});
			} else {
				this.props.observer.publish('_showErrorMessage', 'Invalid search');
			}
		}
	}

	render() {
		return (
			<main style={this.props.style} >
				<NodeGraph graph={this.state.graph} options={this.state.options} events={{
					select: this._selectHandler.bind(this)
				}} />
				<Dialog open={true}>
					<DialogTitle>
						Programming in C++ (LVL.: 5)
					</DialogTitle>
					<DialogContent>
						<DialogContentText>
						The extent of one's ability to write, debug, review, refactor code in C++.
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						<Button color='primary'>
							Level Up
						</Button>
					</DialogActions>
				</Dialog>
			</main>
		);
	}
}