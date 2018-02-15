import { Avatar, Grid, IconButton, Input, Paper, Typography } from 'material-ui';
import { AddCircleOutline, Clear, MyLocation, Search } from 'material-ui-icons';
import * as React from 'react';

import { isBrowser } from '../../misc';
import LoadingView from '../loadingView';
import SkillTree from '../skillTree';
import Props from './profile.props';
import State from './profile.state';
import Style from './profile.style';
import { IUser } from '../../../models/index';

export default class extends React.Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: false,
			searchedUsername: '',
			comment: '',
			user: undefined
		}
	}

	private _openWhereAreYouLink() {
		if (this.state.user) {
			window.open(`${
				process.env.whereAreYouBaseURL
				}${this.state.user.Username}`, '_blank');
		} else {
			window.open(`${
				process.env.whereAreYouBaseURL
				}${this.props.user.Username}`, '_blank');
		}
	}

	private _handleChange = name => event => {
		this.setState({ [name]: event.target.value });
	}

	private _getStyle(style: Object = {}): JSX.IntrinsicAttributes {
		return Object.assign({},
			Style.skillTreeContainer(this.props.height, this.props.width),
			Style.subContainer,
			style);
	}

	private _removePadding(style: Object = {}): JSX.IntrinsicAttributes {
		return Object.assign({}, style,
			{ paddingTop: 0, paddingBottom: 0, paddingLeft: 2, paddingRight: 2 });
	}

	private _requestFindUser() {
		this._searchValidator() &&
			this.props.observer.publish('_findUserByName', this.state.searchedUsername);
	}

	private _clearSearch() {
		this.setState({ user: undefined, searchedUsername: '' });
	}

	private _requestAddComment() {
		this._commentValidator() &&
		this.props.observer.publish('_requestAddComment',{ comment: this.state.comment, userFrom: this.props.user.Username, userTo: this.state.searchedUsername } );
	}

	private _searchValidator = (): boolean => {
		if (this.state.searchedUsername.trim().length < 5) {
			return false;
		} else {
			return true;
		}
	}

	private _searchKeyPressHandler(event, method: Function) {
		if (event.key === 'Enter') {
			this._searchValidator() && this._requestFindUser();
			event.preventDefault();
		} else {
			// Do nothing
		}
	}

	private _commentValidator = (): boolean => {
		if (this.state.comment.trim().length < 20) {
			return false;
		} else {
			return true;
		}
	}

	private _commentKeyPressHandler(event, method: Function) {
		if (event.key === 'Enter') {
			this._commentValidator() && this._requestAddComment();
			event.preventDefault();
		} else {
			// Do nothing
		}
	}

	public componentWillUnmount() {
		this.props.observer.unsubscribe('_findUserRequest');
		this.props.observer.unsubscribe('_userNotfound');
	}

	public componentDidMount() {
		this.props.observer.subscribe('_findUserRequest', (user: IUser) => {
			if (user.Username == this.props.user.Username) {
				this.props.observer.publish('_showError', 'Same User Found');
			} else {
				this.setState({ user: user });
			}
		});
		this.props.observer.subscribe('_userNotfound', (user: IUser) => {
			this.setState({ isLoading: false });
		});
	}

	public render() {
		return (!this.state.isLoading ? <main style={this.props.style}>
			<Paper style={this._removePadding(Style.paperContent)} elevation={4}>
				<Grid container alignItems='center' justify='center' spacing={0}>
					<Grid style={Style.hiddenInXS(this.props.width)} item sm={1}>
						{!this.state.user
							? <Avatar alt={`${this.props.user.Name}'s avatar`}
								src={`${process.env.delveUrl
									}${this.props.user.Username
									}${process.env.delveEmail}`} />
							: <Avatar alt={`${this.state.user.Name}'s avatar`}
								src={`${process.env.delveUrl
									}${this.state.user.Username
									}${process.env.delveEmail}`} />
						}
					</Grid>
					<Grid item xs={12} sm={6}>
						<Typography noWrap>
							{!this.state.user
								? this.props.user.Name
								: this.state.user.Name
							}
							<IconButton onClick={this._openWhereAreYouLink.bind(this)}>
								<MyLocation />
							</IconButton>
						</Typography>
					</Grid>
					<Grid item xs={11} sm={4}>
						{!this.state.user && <Input fullWidth placeholder='Name' autoComplete='off'
							onKeyPress={this._searchKeyPressHandler.bind(this)}
							value={this.state.searchedUsername}
							onChange={this._handleChange('searchedUsername')} type='text'
							error={!this._searchValidator()} />}
					</Grid>
					<Grid item xs={1} sm={1}>
						{!this.state.user
							? <IconButton disabled={!this._searchValidator() || !isBrowser}
								onClick={this._requestFindUser.bind(this)}>
								<Search />
							</IconButton>
							: <IconButton onClick={this._clearSearch.bind(this)}>
								<Clear />
							</IconButton>
						}
					</Grid>
				</Grid>
			</Paper>
			<Paper style={this._removePadding(Style.paperContent)} elevation={4}>
				<SkillTree observer={this.props.observer}
					style={this.state.user ? this._getStyle({
						'visibility': 'hidden',
						'height': 0
					}) : this._getStyle()} />
				{this.state.user
					&& <SkillTree key={this.state.user.Username} observer={this.props.observer}
						style={this._getStyle()} username={this.state.user.Username} />
				}
			</Paper>
			<Paper style={this._removePadding(Style.paperContent)} elevation={4}>
				<Grid container alignItems='center' justify='center' spacing={0}>
					{this.state.user && <Grid item xs={11}>
						<Input fullWidth placeholder='Comment' autoComplete='off'
							onKeyPress={this._commentKeyPressHandler.bind(this)}
							value={this.state.comment} onChange={this._handleChange('comment')}
							type='text' error={!this._commentValidator()} />
					</Grid>}
					{this.state.user && <Grid item xs={1}>
						<IconButton disabled={!this._commentValidator() || !isBrowser}
							onClick={this._requestAddComment.bind(this)}>
							<AddCircleOutline />
						</IconButton>
					</Grid>}
					<Grid item xs={12}>
						{this.state.user
							? <Typography noWrap>
								{this.state.user.Name}'s comment #1 test
							</Typography>
							: <Typography noWrap>
								comment #1 test
							</Typography>
						}
					</Grid>
				</Grid>
			</Paper>
		</main> : <LoadingView style={this.props.style} />);
	}
}