import { Component, OnInit, HostListener, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { PureSideMenuService } from '../pure-side-menu/pure-side-menu.service';
import { RESPONSIVE_BREAKPOINTS } from '../configs';

@Component({
  selector: 'pure-container',
  templateUrl: './pure-container.component.html',
  styleUrls: ['./pure-container.component.scss']
})
export class PureContainer implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize() {
    this._menu.isFullWidth = window.innerWidth >= RESPONSIVE_BREAKPOINTS.NORMAL ? true : false;
  }

  constructor(
    public _menu: PureSideMenuService
  ) { }

  ngOnInit() {
  }

}
