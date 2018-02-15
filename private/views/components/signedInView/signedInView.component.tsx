import * as React from 'react';
import SwipeableViews from 'react-swipeable-views';

import SkillTree from '../skillTree';
import Timeline from '../timeline';
import Dashboard from '../dashboard';
import Profile from '../profile';
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

	private _getStyle(): JSX.IntrinsicAttributes {
		return Object.assign({},
			Style.mainContainer(this.props.containerSize),
			Style.contentContainer);
	}

	public render() {
		return (<SwipeableViews axis='x' index={this.state.currentIndex}
			style={Style.mainContainer(this.props.containerSize)}>
			<main style={Object.assign({},
				Style.mainContainer(this.props.containerSize),
				Style.contentContainer)}>
				{this.props.user
					? <Profile style={this._getStyle()}
						height={this.props.containerSize.height}
						width={this.props.containerSize.width}
						observer={this.props.observer}
						user={this.props.user} />
					: <main>Invalid user</main>
				}
			</main>
			<main style={this._getStyle()}>
				<Timeline style={this._getStyle()}
					observer={this.props.observer} />
			</main>
			<main style={this._getStyle()}>
				<Dashboard style={this._getStyle()}
					height={this.props.containerSize.height}
					width={this.props.containerSize.width}
					observer={this.props.observer} />
			</main>
		</SwipeableViews>);
	}
}

/*

			<main style={this._getStyle()}>
				<SkillTree style={this._getStyle()}
					observer={this.props.observer} />
			</main>

*/