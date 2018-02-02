import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import * as React from 'react';
import Button from 'material-ui/Button';
import Props from './signedInView.props';
import Style from './signedInView.style';
import State from './signedInView.state';
import Input from 'material-ui/Input';
import SwipeableViews from 'react-swipeable-views';
import Paper from 'material-ui/Paper';

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
		return (<SwipeableViews axis='x' index={ this.state.currentIndex }
			style={ Style.mainContainer(this.props.containerSize) }>
			<main style={ Object.assign({},
				Style.mainContainer(this.props.containerSize),
				Style.contentContainer)}>Skill Tree</main>
			<main style={ Object.assign({},
				Style.mainContainer(this.props.containerSize),
				Style.contentContainer)}>Timeline</main>
			<main style={ Object.assign({},
				Style.mainContainer(this.props.containerSize),
				Style.contentContainer)}>Dashboard</main>
			<main style={ Object.assign({},
				Style.mainContainer(this.props.containerSize),
				Style.contentContainer)}>Profile</main>
		</SwipeableViews>);
	}
}