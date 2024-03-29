import { Component, ChangeDetectionStrategy } from '@angular/core';
import { PureSettingsContainerService } from '../../pure-containers/pure-settings-container/pure-settings-container.service';
import { PureSettingsService, SETTINGS } from '../../pure-services/pure-settings.service';

@Component({
  selector: 'pure-settings',
  templateUrl: './pure-settings.component.html',
  styleUrls: ['./pure-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PureSettings {
  SETTINGS = SETTINGS;

  constructor(
    public _settingsContainer: PureSettingsContainerService,
    public _settings: PureSettingsService
  ) {
  }

  onChangeTheme(e) {
    this._settings.saveThemeSetting(e.value);
  }

  onChangeWidthLayout(e) {
    this._settings.saveWidthLayoutSetting(e.value);
  }

  onChangeTextDirection(e) {
    this._settings.saveTextDirectionSetting(e.value);
  }

  onChangeLanguage(e) {
    this._settings.saveLanguageSetting(e.value);
  }

  onScrollbarStyleChange(e) {
    this._settings.saveScrollbarStyleSetting(e.value);
  }
}
