import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';

import SkillTree from '../skillTree';
import Props from './signedInView.props';
import State from './signedInView.state';
import Style from './signedInView.style';

export default class extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
			currentIndex: 0
		}
	}

	public componentDidMount() {
		this.props.observer.subscribe('_swipescreen',
			(currentIndex) => this.setState({ currentIndex }));
	}

	public componentWillUnmount() {
		this.props.observer.unsubscribe('_swipescreen');
	}

	public render() {
		return (<SwipeableViews axis='x' index={this.state.currentIndex}
			style={Style.mainContainer(this.props.containerSize)}>
			<main style={Object.assign({},
				Style.mainContainer(this.props.containerSize),
				Style.contentContainer)}>
				<SkillTree observer={this.props.observer}
					token={this.props.token} />
			</main>
			<main style={Object.assign({},
				Style.mainContainer(this.props.containerSize),
				Style.contentContainer)}>{this.props.token}</main>
			<main style={Object.assign({},
				Style.mainContainer(this.props.containerSize),
				Style.contentContainer)}>Dashboard</main>
			<main style={Object.assign({},
				Style.mainContainer(this.props.containerSize),
				Style.contentContainer)}>
				{this.props.user
					? <div>{`http://whereareyou.eecloud.dynamic.nsn-net.net/user/${this.props.user.Username}`}</div>
					: <div>Invalid user</div>
				}
			</main>
		</SwipeableViews>);
	}
}