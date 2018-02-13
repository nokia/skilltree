import Button from 'material-ui/Button/Button';
import Dialog from 'material-ui/Dialog/Dialog';
import DialogActions from 'material-ui/Dialog/DialogActions';
import DialogContent from 'material-ui/Dialog/DialogContent';
import DialogContentText from 'material-ui/Dialog/DialogContentText';
import DialogTitle from 'material-ui/Dialog/DialogTitle';
import * as React from 'react';
import NodeGraph from 'react-graph-vis';
import { isArray, isUndefined } from 'util';

import { IEdge, ISkill } from '../../../models';
import LoadingView from '../loadingView';
import Options from './skillTree.options';
import Props from './skillTree.props';
import State from './skillTree.state';

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

	public componentWillUnmount() {
		this.props.observer.unsubscribe('_levelUpRequest');
		this.props.observer.unsubscribe('_skillTreeRequest');
	}

	private _skillTreeRequestCallback(graph: {
		nodes: ISkill[],
		edges: IEdge[]
	}) {
		graph.nodes = graph.nodes.map(skill => ({
			...skill,
			hidden: skill.Hidden,
			image: skill.Image,
			label: skill.Label,
			id: skill.Id
		}));
		this.setState({ graph });
	}

	private _selectHandler(events) {
		if (!isUndefined(events.nodes[0]) && !isUndefined(this.state.graph['nodes'])
			&& isArray(this.state.graph['nodes'])) {
			console.log(events);
			console.log(this.state.graph['nodes'])
			let nodes = this.state.graph['nodes'].filter(node => node.Id === events.nodes[0]);
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
			this.props.observer.publish('_requestLevelUp', this.state.selectedNode.Id);
			this.setState({ isLoading: true });
		} else {
			this.setState({ isOpen: false });
			this.props.observer.publish('_showErrorMessage', 'No skill selected');
		}
	}

	private _openSkillLink() {
		(this.state.selectedNode) &&
			window.open(`${this.state.selectedNode.SkillLink}`, '_blank')
	}

	private _levelUpRequest(response: {
		err: string,
		node: {
			accepted: boolean,
			skillLevel: number
		}
	}) {
		if (!response.err && this.state.selectedNode) {
			this.state.selectedNode.Accepted = response.node.accepted;
			this.state.selectedNode.SkillLevel = response.node.skillLevel;
			this.setState({ isLoading: false });
		} else {
			this.setState({ isOpen: false, isLoading: false });
			this.props.observer.publish('_showErrorMessage', response.err);
		}
	}

	public componentDidMount() {
		this.props.observer.subscribe('_levelUpRequest',
			this._levelUpRequest.bind(this));
		this.props.observer.subscribe('_skillTreeRequest',
			this._skillTreeRequestCallback.bind(this));
		this.props.observer.publish('_emitSkillTreeRequest');

	}

	public render() {
		return (this.state.graph.nodes.length > 0 ? <main style={this.props.style} >
			<NodeGraph graph={this.state.graph} options={this.state.options} events={{
				select: this._selectHandler.bind(this)
			}} />
			<Dialog open={this.state.isOpen}>
				<DialogTitle>
					{this.state.selectedNode
						? (this.state.selectedNode.Accepted
							|| this.state.selectedNode.SkillLevel === 0
							? `${this.state.selectedNode.Label} (${
							this.state.selectedNode.SkillLevel
							})`
							: `${this.state.selectedNode.Label} (${
							this.state.selectedNode.SkillLevel - 1
							}) + 1`
						) : 'Not selcted node'
					}
				</DialogTitle>
				<DialogContent>
					<DialogContentText>
						{this.state.selectedNode
							? this.state.selectedNode.Description
							: 'Not selcted node'
						}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					{!this.state.isLoading
						&& <Button onClick={ this._openSkillLink.bind(this) }>
							Skill link
						</Button>
					}
					{!this.state.isLoading
						&& <Button color='secondary' onClick={() => this.setState({ isOpen: false })}>
							Exit
						</Button>
					}
					{this.state.selectedNode && (this.state.selectedNode.Accepted
						|| this.state.selectedNode.SkillLevel === 0) &&
						(!this.state.isLoading
							? <Button color='primary' onClick={this._requestLevelUp.bind(this)}>
								Level Up
							</Button>
							: <main>Loading...</main>)
					}
				</DialogActions>
			</Dialog>
		</main> : <LoadingView style={this.props.style} />);
	}
}