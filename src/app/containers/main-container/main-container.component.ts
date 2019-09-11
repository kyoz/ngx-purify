import { Component, ViewChild, DoCheck, OnInit } from '@angular/core';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { NavigationEnd } from '@angular/router';
import { PureGlobalService } from '../../core/pure-services/pure-global.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainer implements DoCheck, OnInit {
  @ViewChild('MAIN_CONTAINER', { static: true }) containerPerfectScrollbar?: PerfectScrollbarDirective;

  private subscriptions: Map<String, Subscription> = new Map();

  constructor(private _global: PureGlobalService) {}

  ngOnInit() {
    this.subscriptions.set('onRouterEventEmit', this._global.onRouterEventEmit$.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.containerPerfectScrollbar.scrollToTop();
      }
    }));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      if (subscription) {
        subscription.unsubscribe();
      }
    });
  }

  ngDoCheck(): void {
    this.containerPerfectScrollbar.update();
  }
}
