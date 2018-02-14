import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import * as React from 'react';

import Props from './appBar.props';
import Style from './appBar.style';

export default class extends React.Component<Props, {}> {
	render() {
		return (<AppBar color='primary' position='static'>
			<Toolbar>
				<Typography noWrap color='inherit' style={Style.flex}>
					{this.props.title}
				</Typography>
				{this.props.children}
			</Toolbar>
		</AppBar>);
	}
}