import { Component, ViewChild, DoCheck } from '@angular/core';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainer implements DoCheck {
  @ViewChild('MAIN_CONTAINER') containerPerfectScrollbar?: PerfectScrollbarDirective;

  constructor(private _router: Router) {
    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.containerPerfectScrollbar.scrollToTop();
      }
  });
  }

  ngDoCheck(): void {
    this.containerPerfectScrollbar.update();
  }
}
