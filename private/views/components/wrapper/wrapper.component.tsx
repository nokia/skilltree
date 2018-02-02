import * as React from 'react';

import Props from './wrapper.props';
import Style from './wrapper.style';

export default class extends React.Component<Props> {
	render() {
		return (
			<html>
				<head>
					<title>{this.props.props.title}</title>
					<link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' />
				</head>
				<body style={Style.fullSize}>
					<div id='view' dangerouslySetInnerHTML={{ __html: this.props.body }} style={Style.fullSize}/>
					<script id='props' type='application/json'
						dangerouslySetInnerHTML={{__html: JSON.stringify(this.props.props)}} />
					<script src='/static/bundle.js' />
				</body>
			</html>
		)
	}
}