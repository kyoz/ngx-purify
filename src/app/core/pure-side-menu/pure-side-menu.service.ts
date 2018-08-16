import { Injectable, ViewChild, ElementRef } from '@angular/core';
import { RESPONSIVE_BREAKPOINTS } from '../configs';

@Injectable()
export class PureSideMenuService {

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

  public isOpened() {
    return this.state === 'opened';
  }

  public isClosed() {
    return this.state === 'closed';
  }

  public toggleMode() {
    this.state = this.state === 'opened' ? 'closed' : 'opened';

    // To close side menu when toggle
    if (this.state === 'closed') {
      this.canHover = false;
      setTimeout(() => {
        this.canHover = true;
      }, 300);
    }
  }
}
