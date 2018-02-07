import * as React from 'react';
import NodeGraph from 'react-graph-vis';
import { isArray, isUndefined } from 'util';

import { SocketIO } from '../../../libs/socketIO';
import Options from './skillTree.options';
import Props from './skillTree.props';
import State from './skillTree.state';

export default class extends React.Component<Props, State> {
	private _connection: SocketIO;

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
		nodes: { id: number, label: string }[],
		edges: { from: number, to: number }[]
	}) {
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
				console.error('Invalid search');
			}
		}
	}

	render() {
		return (
			<NodeGraph graph={this.state.graph} options={this.state.options} events={{
				select: this._selectHandler.bind(this)
			}} />
		);
	}
}