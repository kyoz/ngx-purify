import { Component } from '@angular/core';
import { PureSettingsContainerService } from '../../pure-containers/pure-settings-container/pure-settings-container.service';
import { PureSettingsService, SETTINGS } from './pure-settings.service';

@Component({
  selector: 'pure-settings',
  templateUrl: './pure-settings.component.html',
  styleUrls: ['./pure-settings.component.scss']
})
export class PureSettings {
  SETTINGS = SETTINGS;

  constructor(
    public _settingsContainer: PureSettingsContainerService,
    public _settings: PureSettingsService
  ) {}

  onChangeWidthLayout(e) {
    this._settings.saveWidthLayoutSetting(e.value);
  }
}
