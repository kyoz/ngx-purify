import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { PureSideMenuService } from './pure-side-menu.service';
import * as Hammer from 'hammerjs';

@Component({
  selector: 'pure-side-menu',
  templateUrl: './pure-side-menu.component.html',
  styleUrls: ['./pure-side-menu.component.scss'],
})
export class PureSideMenu implements OnInit {
  @ViewChild('puresidemenu') pureSideMenu: ElementRef;

  constructor(
    public _menu: PureSideMenuService
  ) { }

  ngOnInit() {
    this.registerHammer();
  }

  registerHammer() {
    const hammer = new Hammer(this.pureSideMenu.nativeElement, {});
    hammer.on('swipeleft', ev => {
      if (!this._menu.isFullWidth) {
        this._menu.close();
      }
    });
  }
}
