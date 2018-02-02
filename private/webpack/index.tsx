import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from '../views/app';

try {
	let unparsedProps = document.getElementById('props');
	if (unparsedProps && unparsedProps.innerHTML) {
		let props = JSON.parse(unparsedProps.innerHTML);
		ReactDOM.hydrate(<App {...props} />, document.getElementById('view'));
	} else {
		throw new Error('No props');
	}
} catch(err) {
	console.error(err.message);
}