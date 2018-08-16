import { Injectable } from '@angular/core';
import { RESPONSIVE_BREAKPOINTS } from '../configs';

@Injectable()
export class PureSideChatboxService {

  public isFullWidth: boolean = false;
  public state: 'opened' | 'closed' = 'closed';
  public canHover: boolean = true;

  constructor() {
    this.isFullWidth = window.innerWidth >= RESPONSIVE_BREAKPOINTS.NORMAL ? true : false;
  }

  public isOpened() {
    return this.state === 'opened';
  }

  public isClosed() {
    return this.state === 'closed';
  }

  public close() {
    this.state = "closed";
  }

  public toggle() {
    this.state = this.state === 'opened' ? 'closed' : 'opened';
  }
}
