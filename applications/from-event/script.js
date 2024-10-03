import { fromEvent } from 'rxjs';

const createNotificationButton = document.getElementById('create-notification');
const notificationMessages = document.getElementById('notification-messages');

const createNotificationElement = () => {
  const element = document.createElement('article');
  element.innerText = 'Adding a new notification.';
  return element;
};

const addMessageToDOM = () => {
  const notification = createNotificationElement();
  notificationMessages.appendChild(notification);
};

/**
 * Your mission:
 *
 * - Use `fromEvent` to create an observable that streams click events.
 * - Subscribe to that observable.
 * - Use `addMessageToDOM` to add a useless message to the DOM whenever the
 *   stream emits a value.
 */

const createNotification$ = fromEvent(createNotificationButton, 'click');
createNotification$.subscribe(addMessageToDOM);
