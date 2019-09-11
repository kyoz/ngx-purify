import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { PureGlobalService } from './core/pure-services/pure-global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  constructor(private _router: Router, private _global: PureGlobalService) {

    this._router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationStart ||
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError) {

            this._global.onRouterEventEmit$.next(event);
      }
    });
  }
}
