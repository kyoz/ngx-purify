import { Injectable } from '@angular/core';
import { PureMainContainerService } from '../pure-main-container/pure-main-container.service';
import { BehaviorSubject, Subscription, combineLatest } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable()
export class PureMenuContainerService {
  isOpened$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isHovering$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  canHover$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  isOpenedOrHoveringMenu$: BehaviorSubject<boolean> = new BehaviorSubject(undefined);

  isOpened: boolean;
  isHovering: boolean;
  canHover: boolean;
  isOpenedOrHoveringMenu: boolean;

  combineBehaviorSubjects$;
  combineSubscription: Subscription;

  constructor(private _mainContainer: PureMainContainerService) {
    this.reset();
    this.initCombineSubscription();
    this.initSubscriptions();
  }

  private initCombineSubscription() {
    this.combineBehaviorSubjects$ = combineLatest(
      this.canHover$,
      this.isHovering$,
      this.isOpened$,
    );

    this.combineSubscription = this.combineBehaviorSubjects$.pipe(distinctUntilChanged()).subscribe(([
        canHover,
        isHovering,
        isOpened,
      ]) => {
        if (canHover && (isHovering || isOpened)) {
          if (!this.isOpenedOrHoveringMenu$.value) {
            this.isOpenedOrHoveringMenu$.next(true);
          }
        } else {
          if (this.isOpenedOrHoveringMenu$.value) {
            this.isOpenedOrHoveringMenu$.next(false);
          }
        }
      });
  }

  private initSubscriptions() {
    this.isOpened$.pipe(distinctUntilChanged()).subscribe(isOpened => {
      this.isOpened = isOpened;
      this.canHover$.next(isOpened);
    });

    this.isHovering$.pipe(distinctUntilChanged()).subscribe(isHovering => {
      this.isHovering = isHovering;
      if (isHovering) {
        this.canHover$.next(true);
      }
    });

    this.canHover$.pipe(distinctUntilChanged()).subscribe(canHover => {
      this.canHover = canHover;
    });

    this.isOpenedOrHoveringMenu$.pipe(distinctUntilChanged()).subscribe(isOpenedOrHoveringMenu => {
      this.isOpenedOrHoveringMenu = isOpenedOrHoveringMenu;
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
