import { Component, OnInit, HostListener, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { PureSidenavService } from './pure-sidenav.service';

@Component({
  selector: 'pure-sidenav',
  templateUrl: './pure-sidenav.component.html',
  styleUrls: ['./pure-sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PureSidenav implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this._sidenav.isFullWidth = window.innerWidth >= 1280 ? true : false;
  }

  constructor(
    public _sidenav: PureSidenavService
  ) { }

  ngOnInit() {
  }

}
