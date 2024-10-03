import { fromEvent, interval, merge, NEVER, takeUntil, skipUntil, scan } from 'rxjs';
// import { skipUntil, scan } from 'rxjs/operators';
import { setCount, startButton, pauseButton } from './utilities';

const start$ = fromEvent(startButton, 'click');
const pause$ = fromEvent(pauseButton, 'click');

// ----- Inital solution (basic counter) -----
// let timer$ = interval(1000);
// let subscription;

// start$.subscribe(() => {
//     subscription = timer$.subscribe(setCount);
// });

// pause$.subscribe(() => subscription.unsubscribe());

// ----- More optimal solution using skipUntil, scan, takeUntil (combining operators) -----
const timer$ = interval(1000).pipe(
  skipUntil(start$),
  scan(count => count + 1, 0),
  takeUntil(pause$)  
);

timer$.subscribe(setCount);
