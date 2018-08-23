import { Injectable } from '@angular/core';
import { RESPONSIVE_BREAKPOINTS } from '../../pure-utils/pure-configs';

@Injectable()
export class PureMenuContainerService {

  public isFullWidth: boolean = false;
  public state: 'opened' | 'closed' = 'opened';
  public canHover: boolean = true;

  constructor() {
    this.isFullWidth = window.innerWidth >= RESPONSIVE_BREAKPOINTS.NORMAL ? true : false;
    this.init();
  }

  public init() {
    if (this.isFullWidth) {
      this.state = 'opened';
    } else {
      this.state = 'closed';
    }
  }

  public open() {
    this.state = 'opened';
  }

  public close() {
    this.state = 'closed';
  }

  public toggle() {
    this.state = this.state === 'opened' ? 'closed' : 'opened';

    // To close side menu when toggle
    if (this.state === 'closed') {
      this.canHover = false;
      setTimeout(() => {
        this.canHover = true;
      }, 300);
    }
  }

  public get isOpened() {
    return this.state === 'opened';
  }

  public get isClosed() {
    return this.state === 'closed';
  }

}
