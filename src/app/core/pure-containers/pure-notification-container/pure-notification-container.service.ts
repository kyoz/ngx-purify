import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PureNotificationContainerService {
  isOpened$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {
    this.isOpened$.subscribe(isOpened => {
      if (!isOpened) {
        // Scroll the notification to top when closed
        const pureNotification = document.getElementsByClassName('notification-wrapper ps ps--active-y');
        if(pureNotification && pureNotification[0]) {
          pureNotification[0].scrollTop = 0;
        }
      }
    })
  }

  public reset() {
    this.isOpened$.next(false);
  }

  public open() {
    if (!this.isOpened$.value) {
      this.isOpened$.next(true);
    }
  }

  public close() {
    if (this.isOpened$.value) {
      this.isOpened$.next(false);
    }
  }
}
