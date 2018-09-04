import { Injectable } from '@angular/core';
import { PureSettingsStorage } from './pure-settings.storage';

export const SETTING_STORAGE_KEYS = {
  theme: 'current-theme',
  language: 'current-language',
  widthLayout: 'current-width-layout'
};

export const SETTINGS = {
  THEMES: ['Default', 'AAAA', 'BBBB', 'CCCC'],
  LANGUAGES: ['English', 'Spanish', 'Chinese'],
  WIDTH_LAYOUTS: ['Fullwidth', 'Boxed']
};

@Injectable()
export class PureSettingsService {
  currentTheme = 'Default';
  currentLanguage = 'English';
  currentWidthLayout = 'Fullwidth';

  constructor(private _storage: PureSettingsStorage) {
  }

  public saveThemeSetting(theme: string) {
    this._storage.storeSetting(SETTING_STORAGE_KEYS.theme, theme);
  }

  public saveLanguageSetting(language: string) {
    this._storage.storeSetting(SETTING_STORAGE_KEYS.language, language);
  }

  public saveWidthLayoutSetting(widthLayout: string) {
    this._storage.storeSetting(SETTING_STORAGE_KEYS.widthLayout, widthLayout);
    this.updateWidthLayout(widthLayout);
  }
  
  init() {
    const storedTheme = this._storage.getStoredSetting(SETTING_STORAGE_KEYS.theme);
    const storedLanguage = this._storage.getStoredSetting(SETTING_STORAGE_KEYS.language);
    const storedWidthLayout = this._storage.getStoredSetting(SETTING_STORAGE_KEYS.widthLayout);

    if (storedTheme) {
      this.currentTheme = storedTheme;
    }
    if (storedLanguage) {
      this.currentLanguage = storedLanguage;
    }
    if (storedWidthLayout) {
      this.currentWidthLayout = storedWidthLayout;
      this.updateWidthLayout(this.currentWidthLayout);
    }
  }

  updateWidthLayout(widthLayout: string) {
    this.currentWidthLayout = widthLayout;
    switch(widthLayout) {
      case 'Boxed':
        document.getElementById('pure_main_container').classList.add('boxed');
        break;
      default:
        document.getElementById('pure_main_container').classList.remove('boxed');
    }
  }

}
