export default {
	fullSize: (height: number, width: number) => {
		return {
			width: width,
			height: height,
			overflow: 'hidden' as
				'hidden' | 'inherit' | 'initial' | 'unset' | 'auto' | 'scroll' | 'visible' | undefined
		}
	},
	halfSize: {
		width: '100%',
		height: '50%'
	},

	table: {
		background: '#BFCBE3'
	},

	card: {
		width: '100%',
		height: '100%',
		border: '1px solid #0288D1',
		backgroundColor: '#bfd2ef'
	},
	
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		overflow: 'hidden',
		justifyContent: 'center'
	},	

	gridList: {
		width: '100%',
	},
	subheader: {
		width: '100%',
	},
	container: {
		webkitboxsizing: 'border-box',
		mozboxsizing: 'border-box',
		boxsizing: 'border-box',
		padding: '10',
		width: '80',
		height: '80',
		background: '#fff'
	  }

};