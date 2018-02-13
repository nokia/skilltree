import * as React from 'react';

import Props from './loadingView.props';
import State from './loadingView.state';
import { LinearProgress } from 'material-ui/Progress';

export default class extends React.Component<Props, State> {
	public render() {
		return (<main style={this.props.style}>
			<LinearProgress />
		</main>);
	}
}