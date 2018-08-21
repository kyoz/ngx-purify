import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { PureMenuContainerService } from './pure-menu-container.service';
import * as Hammer from 'hammerjs';

@Component({
  selector: 'pure-menu-container',
  templateUrl: './pure-menu-container.component.html',
  styleUrls: ['./pure-menu-container.component.scss'],
})
export class PureMenuContainer implements OnInit {
  @ViewChild('pure_side_menu') pureSideMenu: ElementRef;

  constructor(
    public _menu: PureMenuContainerService
  ) { }

  ngOnInit() {
    this.registerHammer();
  }

  registerHammer() {
    const hammer = new Hammer(this.pureSideMenu.nativeElement, {});
    hammer.on('swipeleft', ev => {
      if (!this._menu.isFullWidth) {
        this._menu.toggle();
      }
    });
  }
}