import { Paper, Typography, Grid, Avatar, Input, Hidden } from 'material-ui';
import Button from 'material-ui/Button';
import * as React from 'react';
import SkillTree from '../skillTree';

import LoadingView from '../loadingView';
import Props from './profile.props';
import State from './profile.state';
import Style from './profile.style';

export default class extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			searchedUsername: undefined
		}
	}

	private _openWhereAreYouLink() {
		window.open(`${
			process.env.whereAreYouBaseURL
			}${this.props.user.Username}`, '_blank')
	}

	private _getStyle(): JSX.IntrinsicAttributes {
		return Object.assign({},
			Style.skillTreeContainer(this.props.height, this.props.width),
			Style.subContainer);
	}

	private _removePadding(): JSX.IntrinsicAttributes {
		return Object.assign({},
			Style.paperContent,
			{ padding: 0 });
	}

	private _requestFindUser() {
	}

	public componentWillUnmount() {
	}

	public componentDidMount() {
	}

	public render() {
		return (!this.state.isLoading ? <main style={this.props.style}>
			<Paper style={Style.paperContent} elevation={4}>
				<Grid container alignItems='center' justify='center'>
					<Grid style={Style.hiddenInXS(this.props.width)} item sm={1}>
						<Avatar alt={`${this.props.user.Name}'s avatar`}
							src={`${process.env.delveUrl
								}${this.props.user.Username
								}${process.env.delveEmail}`} />
					</Grid>
					<Grid item xs={12} sm={3}>
						<Typography noWrap component='h2'>
							{this.props.user.Name}
						</Typography>
					</Grid>
					<Grid item xs={12} sm={3}>
						<Button variant="raised" fullWidth onClick={this._openWhereAreYouLink.bind(this)}>
							Open Where Are You
						</Button>
					</Grid>
					<Grid item xs={12} sm={3}>
						<Input fullWidth placeholder='Name'
							autoComplete='off' type='text' />
					</Grid>
					<Grid item xs={12} sm={2}>
						<Button variant="raised"fullWidth onClick={this._openWhereAreYouLink.bind(this)}>
							Find User
						</Button>
					</Grid>
				</Grid>
			</Paper>
			<Paper style={this._removePadding()} elevation={4}>
				<SkillTree observer={this.props.observer}
					style={this._getStyle()} username={this.state.searchedUsername} />
			</Paper>
			<Paper style={Style.paperContent} elevation={4}>
				<Grid container alignItems='center' justify='center'>
					<Grid item xs={9}>
						<Input fullWidth placeholder='Comment'
							autoComplete='off' type='text' />
					</Grid>
					<Grid item xs={3}>
						<Button variant="raised" fullWidth onClick={this._openWhereAreYouLink.bind(this)}>
							Add comment
						</Button>
					</Grid>
					<Grid item xs={12}>
						<Typography noWrap component='h2'>
							{this.props.user.Name}
						</Typography>
					</Grid>
				</Grid>
			</Paper>
		</main> : <LoadingView style={this.props.style} />);
	}
}