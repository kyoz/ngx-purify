import { Injectable } from '@angular/core';
import { RESPONSIVE_BREAKPOINTS } from '../configs';

@Injectable()
export class PureSideMenuService {

  public isFullWidth: boolean = false;
  public mode: 'push' | 'over' = 'over';

  constructor() {
    this.isFullWidth = window.innerWidth >= RESPONSIVE_BREAKPOINTS.NORMAL ? true : false;
  }

  public getMode() {
    return this.mode;
  }

  public toggleMode() {
    this.mode = this.mode === 'over' ? 'push' : 'over';
  }
}