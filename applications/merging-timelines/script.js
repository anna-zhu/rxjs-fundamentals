import {
  fromEvent,
  merge, // whenever triggered, is executed
  interval,
  concat, // sequential queue of observables depending on arg sequence
  race, // only the fastest observable to be emitted
  forkJoin // returns the last values in the arg observables
} from 'rxjs';
import { mapTo, startWith, take, map } from 'rxjs/operators';
import {
  labelWith,
  startButton,
  pauseButton,
  setStatus,
  bootstrap,
} from './utilities';

const startClicks$ = fromEvent(startButton, 'click').pipe(mapTo(true));
const pauseClicks$ = fromEvent(pauseButton, 'click').pipe(mapTo(false));

// merge subscribes to the args
const isRunning$ = merge(startClicks$, pauseClicks$).pipe(startWith(false));

isRunning$.subscribe(setStatus);

const first$ = interval(1000).pipe(map(labelWith('First')), take(4));
const second$ = interval(1000).pipe(map(labelWith('Second')), take(4));
// const combined$ = merge(first$, second$);
// const combined$ = concat(first$, second$);
// const combined$ = race(first$, second$);

bootstrap({ first$, second$, combined$ });
