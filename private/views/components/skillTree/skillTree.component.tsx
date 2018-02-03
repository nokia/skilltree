import * as React from 'react';
import NodeGraph from 'react-graph-vis';
import { isArray, isUndefined } from 'util';

import Options from './skillTree.options';
import Props from './skillTree.props';
import State from './skillTree.state';

export default class extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
			graph: {},
			options: Options
		}
	}

	componentWillMount() {
		let graph = {
			nodes: [
				{ id: 0, label: 'Node 1' },
				{ id: 1, label: 'Node 2' },
				{ id: 2, label: 'Node 3' },
				{ id: 3, label: 'Node 4' },
				{ id: 4, label: 'Node 5' },
				{ id: 5, label: 'Node 6' },
				{ id: 6, label: 'Node 7' }
			],
			edges: [
				{ from: 0, to: 1 },
				{ from: 0, to: 2 },
				{ from: 1, to: 3 },
				{ from: 1, to: 4 },
				{ from: 1, to: 2 },
				{ from: 2, to: 5 },
				{ from: 4, to: 5 },
				{ from: 5, to: 6 },
				{ from: 2, to: 6 }
			]
		}
		this.setState({ graph: graph });
	}

	_selectHandler(events) {
		if (!isUndefined(events.nodes[0]) && !isUndefined(this.state.graph['nodes'])
			&& isArray(this.state.graph['nodes'])) {
			let nodes = this.state.graph['nodes'].filter(node => node.id === events.nodes[0]);
			if (nodes.length > 0) {
				nodes.forEach(node => {
					console.log('test');
					this.props.observer.publish('_nodeEvent', node);
				});
			} else {
				console.error('Invalid search');
			}
		}
	}

	render() {
		return (
			<NodeGraph graph={this.state.graph} options={this.state.options} events={{ select: this._selectHandler.bind(this) }} />
		);
	}
}