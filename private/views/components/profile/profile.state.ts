import { IUser } from '../../../models';

export default interface State {
	isLoading: boolean;
	searchedUsername: string;
	comment: string;
	user: IUser | undefined;
	endorsments: string[];
}