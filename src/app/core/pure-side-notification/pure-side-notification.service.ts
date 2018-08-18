import { Injectable } from '@angular/core';

@Injectable()
export class PureSideNotificationService {

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

  public isOpened() {
    return this.state === 'opened';
  }

  public isClosed() {
    return this.state === 'closed';
  }
}
