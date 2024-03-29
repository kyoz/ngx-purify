import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PureSettingsContainerService } from '../../pure-containers/pure-settings-container/pure-settings-container.service';

@Component({
  selector: 'pure-setting-button',
  templateUrl: './pure-setting-button.component.html',
  styleUrls: ['./pure-setting-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PureSettingButton {

  constructor(public _settingsContainer: PureSettingsContainerService) { }

  openSettings() {
    this._settingsContainer.open();
  }

}
