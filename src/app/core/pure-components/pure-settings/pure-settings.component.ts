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

  // Subscribe variables to use as models
  currentTheme;
  currentLang;
  currentTextDir;
  currentWidthLayout;

  constructor(
    public _settingsContainer: PureSettingsContainerService,
    public _settings: PureSettingsService
  ) {
    this._settings.currentTheme$.subscribe(theme => {
      this.currentTheme = theme;
    });

    this._settings.currentLang$.subscribe(lang => {
      this.currentLang = lang;
    });

    this._settings.currentTextDir$.subscribe(textDir => {
      this.currentTextDir = textDir;
    });

    this._settings.currentWidthLayout$.subscribe(widthLayout => {
      this.currentWidthLayout = widthLayout;
    });
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
}
