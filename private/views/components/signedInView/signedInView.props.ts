import ReactObserver from 'react-event-observer';

import { IUser } from '../../../models';

export default interface Props {
	observer: ReactObserver;
	containerSize: { height: number, width: number };
	user: IUser | undefined;
	token: string | undefined;
}