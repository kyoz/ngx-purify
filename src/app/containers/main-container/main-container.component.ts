import { Component, ViewChild, DoCheck } from '@angular/core';
import { PerfectScrollbarDirective } from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainer implements DoCheck {
  @ViewChild('MAIN_CONTAINER') containerPerfectScrollbar?: PerfectScrollbarDirective;

  ngDoCheck(): void {
    this.containerPerfectScrollbar.update();
  }

  constructor() { }
}
