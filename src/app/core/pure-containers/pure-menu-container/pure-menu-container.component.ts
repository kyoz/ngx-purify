import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { PureMenuContainerService } from './pure-menu-container.service';
import * as Hammer from 'hammerjs';

@Component({
  selector: 'pure-menu-container',
  templateUrl: './pure-menu-container.component.html',
  styleUrls: ['./pure-menu-container.component.scss'],
})
export class PureMenuContainer implements OnInit {
  @ViewChild('pure_menu_container') pureSideMenuContainer: ElementRef;

  constructor(
    public _menuContainer: PureMenuContainerService
  ) { }

  ngOnInit() {
    this.registerHammer();
  }

  registerHammer() {
    const hammer = new Hammer(this.pureSideMenuContainer.nativeElement, {});
    hammer.on('swipeleft', ev => {
      if (!this._menuContainer.isFullWidth) {
        this._menuContainer.close();
      }
    });
  }
}
