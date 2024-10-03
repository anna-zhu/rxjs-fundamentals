import { fromEvent, interval, merge, NEVER } from 'rxjs';
import { count, setCount, startButton, pauseButton } from './utilities';

const start$ = fromEvent(startButton, 'click');
const pause$ = fromEvent(pauseButton, 'click');
let interval$ = interval(1000);
let subscription;

start$.subscribe(() => {
    subscription = interval$.subscribe(setCount)
});
// can only unsubscribe from a Subscription, not an Observable
pause$.subscribe(() => subscription.unsubscribe());
