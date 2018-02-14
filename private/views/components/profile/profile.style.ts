export default {
	skillTreeContainer: (height: number, width: number) => {
		return {
			width: '100%',
			height: height - width * 0.2
		}
	},
	subContainer: {
		overflowY: 'auto',
		overflowX: 'hidden'
	},
	paperContent: {
		padding: 16,
		marginTop: 3
	},
	flexView: {
		flex: 1
	},
	hiddenInXS: (width: number) => {
		return {
			'visibility': width < 600 ? 'hidden' : 'visible',
			'height': width < 600 && 0
		}
	}
}