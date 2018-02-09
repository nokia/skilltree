export default interface State {
	graph: {
		nodes: {
			id: number,
			label: string,
			image: string,
			description: string,
			accepted: boolean,
			skillLevel: number
		}[],
		edges: { from: number, to: number }[]
	},
	options: object,
	isOpen: boolean,
	selectedNode: {
		id: number,
		label: string,
		image: string,
		description: string,
		accepted: boolean,
		skillLevel: number
	} | undefined,
	isLoading: boolean
}