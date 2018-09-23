import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RESPONSIVE_BREAKPOINTS } from '../../pure-utils/pure-configs';

@Injectable()
export class PureMainContainerService {
  isFullWidth$: BehaviorSubject<boolean> 
  
  constructor() {
    this.isFullWidth$ = new BehaviorSubject(window.innerWidth >= RESPONSIVE_BREAKPOINTS.NORMAL ? true : false);
  }
}
