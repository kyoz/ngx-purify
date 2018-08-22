import { Injectable } from '@angular/core';

@Injectable()
export class PureNotificationContainerService {

  public state: 'opened' | 'closed' = 'closed';

  constructor() {}

  public open() {
    this.state = "opened";
  }

  public close() {
    this.state = "closed";
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
