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
			options: Options,
			isOpen: false,
			selectedNode: undefined,
			isLoading: false
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
			description: string,
			accepted: boolean,
			skillLevel: number,
			hidden: boolean
		}[],
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
					this.setState({ selectedNode: node, isOpen: true })
				});
			} else {
				this.props.observer.publish('_showErrorMessage', 'Invalid search');
			}
		}
	}

	private _requestLevelUp() {
		if (this.state.selectedNode) {
			this.props.observer.publish('_requestLevelUp', this.state.selectedNode.id);
			this.setState({ isLoading: true });
		} else {
			this.setState({ isOpen: false });
			this.props.observer.publish('_showErrorMessage', 'No skill selected');
		}
	}

	private _levelUpRequest(response:
		{
			err: string,
			node: {
				accepted: boolean,
				skillLevel: number
			}
		}) {
		if (!response.err && this.state.selectedNode) {
			this.state.selectedNode.accepted = response.node.accepted;
			this.state.selectedNode.skillLevel = response.node.skillLevel;
			this.setState({ isLoading: false });
		} else {
			this.setState({ isOpen: false, isLoading: false });
			this.props.observer.publish('_showErrorMessage', response.err);
		}
	}

	public componentDidMount() {
		this.props.observer.subscribe('_levelUpRequest', this._levelUpRequest.bind(this));
	}

	public render() {
		return (
			<main style={this.props.style} >
				<NodeGraph graph={this.state.graph} options={this.state.options} events={{
					select: this._selectHandler.bind(this)
				}} />
				<Dialog open={this.state.isOpen}>
					<DialogTitle>
						{this.state.selectedNode
							? (this.state.selectedNode.accepted
								|| this.state.selectedNode.skillLevel === 0
								? `${this.state.selectedNode.label} (${
								this.state.selectedNode.skillLevel
								})`
								: `${this.state.selectedNode.label} (${
								this.state.selectedNode.skillLevel - 1
								}) + 1`
							) : 'Not selcted node'
						}
					</DialogTitle>
					<DialogContent>
						<DialogContentText>
							{this.state.selectedNode
								? this.state.selectedNode.description
								: 'Not selcted node'
							}
						</DialogContentText>
					</DialogContent>
					<DialogActions>
						{!this.state.isLoading
							&& <Button color='secondary'
								onClick={() => this.setState({ isOpen: false })}>
								Exit
							</Button>
						}
						{this.state.selectedNode && (this.state.selectedNode.accepted
							|| this.state.selectedNode.skillLevel === 0) &&
							(!this.state.isLoading
								? <Button color='primary'
									onClick={this._requestLevelUp.bind(this)}>
									Level Up
								</Button>
								: <main>Loading...</main>)
						}
					</DialogActions>
				</Dialog>
			</main>
		);
	}
}