import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RESPONSIVE_BREAKPOINTS } from '../../../configs/sizes';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable()
export class PureMainContainerService {
  isFullWidth$: BehaviorSubject<boolean>;

  isFullWidth: boolean;

  constructor() {
    this.isFullWidth$ = new BehaviorSubject(window.innerWidth >= RESPONSIVE_BREAKPOINTS.NORMAL ? true : false);

    this.isFullWidth$.pipe(distinctUntilChanged()).subscribe(isFullWidth => {
      this.isFullWidth = isFullWidth;
    });
  }
}
