import { Component, OnInit } from '@angular/core';
import { PureSettingsContainerService } from '../../pure-containers/pure-settings-container/pure-settings-container.service';

@Component({
  selector: 'pure-setting-button',
  templateUrl: './pure-setting-button.component.html',
  styleUrls: ['./pure-setting-button.component.scss']
})
export class PureSettingButton implements OnInit {

  constructor(public _settingsContainer: PureSettingsContainerService) { }

  ngOnInit() {
  }

  openSettings() {
    this._settingsContainer.open();
  }

}
