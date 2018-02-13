import ReactObserver from 'react-event-observer';
import { IUser } from '../../../models';

export default interface Props {
	observer: ReactObserver;
	style: JSX.IntrinsicAttributes;
	user: IUser;
	width: number;
}
