import { IEdge, ISkill } from '../../../models';

export default interface State {
	graph: {
		nodes: ISkill[],
		edges: IEdge[]
	},
	options: object,
	isOpen: boolean,
	selectedNode: ISkill | undefined,
	isLoading: boolean
}