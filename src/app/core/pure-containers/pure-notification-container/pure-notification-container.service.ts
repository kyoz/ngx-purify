import { Injectable } from '@angular/core';

@Injectable()
export class PureNotificationContainerService {

  public state: 'opened' | 'closed' = 'closed';

  constructor() {}

  public init() {
    this.state = 'closed';
  }

  public open() {
    this.state = 'opened';
  }

  public close() {
    this.state = 'closed';

    // Scroll the notification to top when closed
    setTimeout(() => {
      const pureNotification = document.getElementsByClassName('notification-wrapper ps ps--active-y');
      if(pureNotification && pureNotification[0]) {
        pureNotification[0].scrollTop = 0;
      }
    }, 100);
  }

  public toggle() {
    this.state = this.state === 'opened' ? 'closed' : 'opened';
  }

  public get isOpened() {
    return this.state === 'opened';
  }

  public get isClosed() {
    return this.state === 'closed';
  }
}
