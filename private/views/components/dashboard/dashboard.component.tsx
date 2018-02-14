import * as React from 'react';
import * as ReactObserver from 'react-event-observer';
import Card from 'material-ui/Card/Card';
import Grid from 'material-ui/Grid/Grid';
import Props from './dashboard.props';
import State from './dashboard.state';
import Style from './dashboard.style';
import Typography from 'material-ui/Typography';
import { IntlProvider } from 'react-intl';
import GridList from 'material-ui/GridList/GridList';
import GridListTile from 'material-ui/GridList/GridListTile';
import { findDOMNode } from 'react-dom';
import { Radar, RadarChart, PolarGrid, Legend,
	PolarAngleAxis, PolarRadiusAxis } from 'recharts';

	const data = [
		{ competence: 'Software engineering', A: 120, B: 110, fullMark: 150 },
		{ competence: 'Hardware expertise', A: 98, B: 130, fullMark: 150 },
		{ competence: 'Telecommunication networks', A: 86, B: 130, fullMark: 150 },
		{ competence: 'Management', A: 99, B: 100, fullMark: 150 },
		{ competence: 'Human Resources', A: 85, B: 90, fullMark: 150 },
		{ competence: 'Testing', A: 65, B: 85, fullMark: 150 },
	];

export default class extends React.Component<Props, State> {
	private _observer;

	constructor(props) {
		super(props);
		this._setContainerHeight = this._setContainerHeight.bind(this);
		this._setContainerWidth = this._setContainerWidth.bind(this);
		this._observer = this.props.observer;
		this.state = {
			fullHeight: 100,
			fullWidth: 150
		}
	}
	
	componentDidMount() {
		/*fthis._observer.subscribe('changeWidth', this._setContainerWidth);
		this._observer.subscribe('changeHeight', this._setContainerHeight);
		this._observer.publish('queryHeight');
		this._observer.publish('queryWidth');*/
	}

	_setContainerHeight(height) {
		this.setState({ fullHeight: height });
	}
	_setContainerWidth(width) {
		this.setState({ fullWidth: width });
	}

	whichOneIsSmaller( number1 , number2 )
	{
		if (( number1 > number2 ) || ( number1 === number2 ))
		{
		  return number2;
		}
		else return number1;
	}

	render() {
		return (
			<div style={ this.props.style }>
				<RadarChart innerRadius={ this.whichOneIsSmaller(this.props.height, this.props.width) / 10 }
					outerRadius={ this.whichOneIsSmaller(this.props.height, this.props.width) / 3 }
					cx={this.props.width / 2} cy={this.props.height / 2}
					width={this.props.width} height={this.props.height} data={data}>
					<PolarGrid />
					<PolarAngleAxis dataKey="competence" />
					<PolarRadiusAxis/>
					<Radar name="You" dataKey="A" stroke="#435277" fill="#284472" fillOpacity={0.5} animationDuration= {1000} margin={0} />
				</RadarChart>
			</div>
		);
	}
}