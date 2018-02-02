import Button from 'material-ui/Button';
import * as React from 'react';

import Props from './signedInBar.props';
import State from './signedInBar.state';

export default class extends React.Component<Props, State> {
	constructor(props) {
		super(props);
	}

	render() {
		return (<main>
			<Button onClick={ () => this.props.observer.publish('_swipescreen', 0) }
				color='inherit'>Skill Tree</Button>
			<Button onClick={ () => this.props.observer.publish('_swipescreen', 1) }
				color='inherit'>Timeline</Button>
			<Button onClick={ () => this.props.observer.publish('_swipescreen', 2) }
				color='inherit'>Dashboard</Button>
			<Button onClick={ () => this.props.observer.publish('_swipescreen', 3) }
				color='inherit'>Profile</Button>
			<Button onClick={ () => this.props.observer.publish('_logout') }
				color='inherit'>Logout</Button>
		</main>);
	}
}