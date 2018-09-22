import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ElementRef } from '@angular/core';
import { PureMenuContainerService } from './pure-menu-container.service';
import { PureSettingsService } from '../../pure-services/pure-settings.service';
import * as Hammer from 'hammerjs';

@Component({
  selector: 'pure-menu-container',
  templateUrl: './pure-menu-container.component.html',
  styleUrls: ['./pure-menu-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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

    // Actually, we can just use hammer.on('swipe') and detect if user swipe left or right for both
    // LTR and RTL direction, but i'v test and it not work well on mobile so for now, i do seperate em

    hammer.on('swiperight', () => {
      if (this._settings.currentTextDir$.value === 'RTL') {
        this._menuContainer.close();
      }
    });

    hammer.on('swipeleft', () => {
      if (this._settings.currentTextDir$.value === 'LTR') {
        this._menuContainer.close();
      }
    });
  }

  onMouseEnter() {
    this._menuContainer.setIsHovering(true);
  }

  onMouseLeave() {
    this._menuContainer.setIsHovering(false);
  }
}
