import { IUser } from '../models';

export default interface State {
	userIsLoggedIn: boolean;
	user: IUser | undefined;
	token: string | undefined;
	loaded: boolean;
	errorMessage: string;
	containerSize: { height: number, width: number };
}