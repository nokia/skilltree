export default interface State {
	graph: {
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
	},
	options: object,
	isOpen: boolean,
	selectedNode: {
		id: number,
		label: string,
		image: string,
		description: string,
		accepted: boolean,
		skillLevel: number,
		hidden: boolean
	} | undefined,
	isLoading: boolean
}