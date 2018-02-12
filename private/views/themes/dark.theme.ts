import createMuiTheme from 'material-ui/styles/createMuiTheme';
import createPalette from 'material-ui/styles/createPalette';
import { indigo, pink, red } from 'material-ui/colors';

export default createMuiTheme({
	palette: createPalette({
		primary: indigo,
		secondary: pink,
		error: red,
		type: 'light'
	})
})