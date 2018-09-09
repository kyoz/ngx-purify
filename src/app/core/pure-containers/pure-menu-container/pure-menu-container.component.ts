import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { PureMenuContainerService } from './pure-menu-container.service';
import { PureSettingsService } from '../../pure-services/pure-settings.service';
import * as Hammer from 'hammerjs';

@Component({
  selector: 'pure-menu-container',
  templateUrl: './pure-menu-container.component.html',
  styleUrls: ['./pure-menu-container.component.scss'],
})
export class PureMenuContainer implements OnInit {
  @ViewChild('pure_menu_container') pureSideMenuContainer: ElementRef;

  constructor(
    public _menuContainer: PureMenuContainerService,
    public _settings: PureSettingsService
  ) { }

  ngOnInit() {
    this.registerHammer();
  }

  registerHammer() {
    const hammer = new Hammer(this.pureSideMenuContainer.nativeElement, {});

    hammer.on('swipe', event => {
      if (!this._menuContainer.isFullWidth) {
        if (event.direction === 4 && this._settings.textDirection === 'RTL') { // Right
          this._menuContainer.close();
        }
        if (event.direction === 2 && this._settings.textDirection === 'LTR') { // Left
          this._menuContainer.close();
        }
      }
    });
  }
}
