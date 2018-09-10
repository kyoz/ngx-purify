import { Injectable } from '@angular/core';
import { PureSettingsStorageService } from './pure-settings.storage';
import { THEMES } from '../../configs/themes';
import { LANGUAGES } from '../../configs/languages';
import { IPureTheme } from '../pure-interfaces/settings';

export const SETTING_STORAGE_KEYS = {
  theme: 'current-theme',
  language: 'current-language',
  textDirection: 'current-text-direction',
  widthLayout: 'current-width-layout'
};

export const SETTINGS = {
  THEMES: THEMES,
  LANGUAGES: LANGUAGES,
  TEXT_DIRECTIONS: ['LTR', 'RTL'],
  WIDTH_LAYOUTS: ['Fullwidth', 'Boxed']
};

@Injectable()
export class PureSettingsService {
  currentSettings = {
    theme: THEMES[0].class, // Take first theme as default
    language: 'English',
    textDirection: 'LTR',
    widthLayout: 'Fullwidth'
  }

  constructor(private _storage: PureSettingsStorageService) {
  }

  /**
   * SAVE SETTING FUNCTIONS
   */

  public saveThemeSetting(themeClass: string) {
    this._storage.storeSetting(SETTING_STORAGE_KEYS.theme, themeClass);
    this.updateTheme(themeClass);
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

  /**
   * INIT FUNCTION
   */

  init() {
    const storedTheme: string = this._storage.getStoredSetting(SETTING_STORAGE_KEYS.theme);
    const storedLanguage = this._storage.getStoredSetting(SETTING_STORAGE_KEYS.language);
    const storedTextDirection = this._storage.getStoredSetting(SETTING_STORAGE_KEYS.textDirection);
    const storedWidthLayout = this._storage.getStoredSetting(SETTING_STORAGE_KEYS.widthLayout);

    if (storedTheme) {
      this.currentSettings.theme = storedTheme;
      this.updateTheme(storedTheme);
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

  /**
   * UPDATE FUNCTIONS
   */

  updateTheme(themeClass: string) {
    const themeClassList: any = document.getElementById('PURE_ADMIN_DASHBOARD').classList;
    let newThemeClass = '';

    for (const theme of THEMES) {
      // Set the new theme
      if (theme.class === themeClass) {
        newThemeClass = theme.class;
      } else {
        // Remove other themes
        themeClassList.remove(theme.class);
      }
    }

    // Add new theme class to index.html
    if (newThemeClass) {
      themeClassList.add(newThemeClass);
    } else {

      // In some case, due to the configuration of adding or remove theme class.
      // The current theme store in storage doesn't match any current theme
      // So reset to the default theme (Need at least one theme)

      this.currentSettings.theme = THEMES[0].class;
      this.updateTheme(this.currentSettings.theme);
    }
  }

  updateTextDirection(textDirection: string) {
    switch (textDirection) {
      case 'RTL':
        document.getElementById('PURE_MAIN_CONTAINER').setAttribute('dir', 'rtl');
        break;
      default:
        document.getElementById('PURE_MAIN_CONTAINER').removeAttribute('dir');
    }
  }

  updateWidthLayout(widthLayout: string) {
    switch (widthLayout) {
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
