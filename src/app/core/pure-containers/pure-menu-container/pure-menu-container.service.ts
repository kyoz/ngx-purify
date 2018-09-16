import { Injectable } from '@angular/core';
import { RESPONSIVE_BREAKPOINTS } from '../../pure-utils/pure-configs';

@Injectable()
export class PureMenuContainerService {

  private _isFullWidth: boolean = false;
  private _isHovering: boolean = false;
  private _state: 'opened' | 'closed' = 'opened';
  private _canHover: boolean = true;

  constructor() {
    this._isFullWidth = window.innerWidth >= RESPONSIVE_BREAKPOINTS.NORMAL ? true : false;
    this.init();
  }

  public init() {
    if (this.isFullWidth) {
      this._state = 'opened';
    } else {
      this._state = 'closed';
    }
  }

  public open() {
    this._state = 'opened';
  }

  public close() {
    this._state = 'closed';
  }

  public toggle() {
    this._state = this._state === 'opened' ? 'closed' : 'opened';

    // To close side menu when toggle
    if (this._state === 'closed') {
      this._canHover = false;
      setTimeout(() => {
        this._canHover = true;
      }, 300);
    }
  }

  /**
   * SET FUNCTIONS
   */

  public setIsFullWidth(isFullWidth) {
    this._isFullWidth = isFullWidth;
  }

  public setIsHovering(isHovering) {
    this._isHovering= isHovering;
  }

  /**
   * GET FUNCTIONS
   */

  public get isFullWidth() {
    return this._isFullWidth;
  }

  public get isOpened() {
    return this._state === 'opened';
  }

  public get isClosed() {
    return this._state === 'closed';
  }
  
  public get canHover() {
    return this._canHover;
  }

  public get isHovering() {
    return this._isHovering;
  }
}
