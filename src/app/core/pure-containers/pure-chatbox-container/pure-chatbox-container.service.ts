import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable()
export class PureChatboxContainerService {
  isOpened$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  isOpened: boolean;

  constructor() {
    this.isOpened$.pipe(distinctUntilChanged()).subscribe(isOpened => {
      this.isOpened = isOpened;
    });
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
}
