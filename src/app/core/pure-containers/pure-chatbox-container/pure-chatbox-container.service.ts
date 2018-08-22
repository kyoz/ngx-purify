import { Injectable } from '@angular/core';
import { RESPONSIVE_BREAKPOINTS } from '../../pure-utils/pure-configs';

@Injectable()
export class PureChatboxContainerService {

  public isFullWidth: boolean = false;
  public state: 'opened' | 'closed' = 'closed';
  public canHover: boolean = true;

  constructor() {
    this.isFullWidth = window.innerWidth >= RESPONSIVE_BREAKPOINTS.NORMAL ? true : false;
  }

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
