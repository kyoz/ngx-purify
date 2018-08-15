import { Injectable } from '@angular/core';

@Injectable()
export class PureSidenavService {

  public isFullWidth: boolean = true;

  private mode: 'push' | 'over' = 'over';

  constructor() {}

  public getMode() {
    return this.mode;
  }

  public toggleMode() {
    this.mode = this.mode === 'over' ? 'push' : 'over';
  }
}