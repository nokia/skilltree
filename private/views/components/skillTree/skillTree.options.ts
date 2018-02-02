export default {
	layout: {
		hierarchical: {
			nodeSpacing: 150,
			sortMethod: 'directed'
		}
	},
	physics: {
		enabled: false,
	},
	interaction: {
		dragNodes: false
	},
	edges: {
		color: {
			color: '#848484',
			highlight: '#848484',
			hover: '#848484',
			inherit: 'from',
			opacity: 1.0
		},
		arrowStrikethrough: false,
		smooth: {
			type: 'vertical'
		},
	},
	nodes: {
		shape: 'box'
	}
}