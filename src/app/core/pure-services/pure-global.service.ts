import { Injectable } from '@angular/core';
import { RouterEvent } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PureGlobalService {
  onRouterEventEmit$: BehaviorSubject<RouterEvent> = new BehaviorSubject(undefined);
}
