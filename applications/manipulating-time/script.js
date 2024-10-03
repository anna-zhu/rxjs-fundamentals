import { fromEvent, interval } from 'rxjs';
import {
  throttleTime,
  debounceTime,
  delay,
  debounce,
  throttle,
  scan,
  map,
  tap,
} from 'rxjs/operators';

import {
  button,
  panicButton,
  addMessageToDOM,
  deepThoughtInput,
  setTextArea,
  setStatus,
} from './utilities';

const panicClicks$ = fromEvent(panicButton, 'click');
const buttonClicks$ = fromEvent(button, 'click').pipe(
  // delay(2000) ---> continues to queue
  // throttleTime(2000) ---> triggers, but starts a rest period set by arg
  // debounceTime(2000) ---> doesn't trigger until rest period set by arg is reached
  // throttle(() => panicClicks$) ---> triggers, but cannot be triggered again until arg is executed
  // debounce(() => panicClicks$) ---> doesn't trigger until arg is executed
);

buttonClicks$.subscribe(addMessageToDOM);
