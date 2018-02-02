import ReactObserver from 'react-event-observer';

export default interface Props {
	observer: ReactObserver;
	containerSize: { height: number, width: number };
}