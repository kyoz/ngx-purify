import { Component, ViewChild, DoCheck, OnInit } from '@angular/core';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainer implements DoCheck, OnInit {
  @ViewChild('MAIN_CONTAINER', { static: true }) containerPerfectScrollbar?: PerfectScrollbarDirective;

  constructor(private _router: Router) {}

  ngOnInit() {
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
