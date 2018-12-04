import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable()
export class PureSettingsContainerService {
  isOpened$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  isOpened: boolean;

  constructor() {
    this.isOpened$.pipe(distinctUntilChanged()).subscribe(isOpened => {
      this.isOpened = isOpened;
    });
  }

  public open() {
    this.isOpened$.next(true);
  }

  public close() {
    this.isOpened$.next(false);
  }
}
