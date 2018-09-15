import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PureSettingsContainerService } from './pure-settings-container.service';
import * as Hammer from 'hammerjs';

@Component({
  selector: 'pure-settings-container',
  templateUrl: './pure-settings-container.component.html',
  styleUrls: ['./pure-settings-container.component.scss']
})
export class PureSettingsContainer implements OnInit {
  @ViewChild('pure_settings_container') pureSettingsContainer: ElementRef;

  constructor(public _settingsContainer: PureSettingsContainerService) { }

  ngOnInit() {
    this.registerHammer();
  }

  registerHammer() {
    const hammer = new Hammer(this.pureSettingsContainer.nativeElement, {});
    hammer.on('swiperight', () => {
      this._settingsContainer.close();
    });
  }
}
