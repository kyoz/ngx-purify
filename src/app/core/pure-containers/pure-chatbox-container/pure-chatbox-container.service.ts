import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class PureChatboxContainerService {
  isOpened$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public open() {
    this.isOpened$.next(true);
  }

  public close() {
    this.isOpened$.next(false);
  }
}
