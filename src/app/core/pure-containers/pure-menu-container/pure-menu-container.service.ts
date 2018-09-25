import { Injectable } from '@angular/core';
import { PureMainContainerService } from '../pure-main-container/pure-main-container.service';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Injectable()
export class PureMenuContainerService {
  isOpened$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isHovering$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  canHover$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  constructor(private _mainContainer: PureMainContainerService) {
    this.reset();

    this.isOpened$.subscribe(isOpened => {
      if (!isOpened) {
        this.canHover$.next(false);
      }
    });

    this.isHovering$.subscribe(isHovering => {
      if (isHovering) {
        this.canHover$.next(true);
      }
    });
  }

  public reset() {
    this.isOpened$.next(this._mainContainer.isFullWidth$.value);
  }

  public open() {
    if (!this.isOpened$.value) {
      this.isOpened$.next(true);
    }
  }

  public close() {
    if (this.isOpened$.value) {
      this.isOpened$.next(false);
    }
  }

  public toggle() {
    this.isOpened$.next(!this.isOpened$.value);
  }
}
