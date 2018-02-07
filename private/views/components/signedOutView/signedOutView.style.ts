export default {
	mainContainer: (size: { height: number, width: number }) => {
		return {
			height: size.height,
			width: size.width,
		}
	},
	contentContainer: {
		overflowY: 'auto',
		overflowX: 'hidden'
	}
}