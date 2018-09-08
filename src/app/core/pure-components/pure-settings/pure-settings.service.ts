import { Injectable } from '@angular/core';
import { PureSettingsStorageService } from './pure-settings.storage';

export const SETTING_STORAGE_KEYS = {
  theme: 'current-theme',
  language: 'current-language',
  textDirection: 'current-text-direction',
  widthLayout: 'current-width-layout'
};

export const SETTINGS = {
  THEMES: ['Default', 'AAAA', 'BBBB', 'CCCC'],
  LANGUAGES: ['English', 'Spanish', 'Chinese'],
  TEXT_DIRECTIONS: ['LTR', 'RTL'],
  WIDTH_LAYOUTS: ['Fullwidth', 'Boxed']
};

@Injectable()
export class PureSettingsService {
  currentSettings = {
    theme: 'Default',
    language: 'English',
    textDirection: 'LTR',
    widthLayout: 'Fullwidth'
  }

  constructor(private _storage: PureSettingsStorageService) {
  }

  public saveThemeSetting(theme: string) {
    this._storage.storeSetting(SETTING_STORAGE_KEYS.theme, theme);
  }

  public saveLanguageSetting(language: string) {
    this._storage.storeSetting(SETTING_STORAGE_KEYS.language, language);
  }

  public saveTextDirectionSetting(textDirection: string) {
    this._storage.storeSetting(SETTING_STORAGE_KEYS.textDirection, textDirection);
    this.updateTextDirection(textDirection);
  }
  
  public saveWidthLayoutSetting(widthLayout: string) {
    this._storage.storeSetting(SETTING_STORAGE_KEYS.widthLayout, widthLayout);
    this.updateWidthLayout(widthLayout);
  }

  init() {
    const storedTheme = this._storage.getStoredSetting(SETTING_STORAGE_KEYS.theme);
    const storedLanguage = this._storage.getStoredSetting(SETTING_STORAGE_KEYS.language);
    const storedTextDirection = this._storage.getStoredSetting(SETTING_STORAGE_KEYS.textDirection);
    const storedWidthLayout = this._storage.getStoredSetting(SETTING_STORAGE_KEYS.widthLayout);

    if (storedTheme) {
      this.currentSettings.theme = storedTheme;
    }
    if (storedLanguage) {
      this.currentSettings.language = storedLanguage;
    }
    if (storedTextDirection) {
      this.currentSettings.textDirection = storedTextDirection;
      this.updateTextDirection(storedTextDirection);
    }
    if (storedWidthLayout) {
      this.currentSettings.widthLayout = storedWidthLayout;
      this.updateWidthLayout(storedWidthLayout);
    }
  }

  updateTextDirection(textDirection: string) {
    switch(textDirection) {
      case 'RTL':
        document.getElementById('PURE_MAIN_CONTAINER').setAttribute('dir', 'rtl');
        break;
      default:
        document.getElementById('PURE_MAIN_CONTAINER').removeAttribute('dir');
    }
  }

  updateWidthLayout(widthLayout: string) {
    switch(widthLayout) {
      case 'Boxed':
        document.getElementById('PURE_MAIN_CONTAINER').classList.add('boxed');
        break;
      default:
        document.getElementById('PURE_MAIN_CONTAINER').classList.remove('boxed');
    }
  }

  /**
   * GETTING FUNCTIONS
   */

  public get textDirection() {
    return this.currentSettings.textDirection;
  }
}
