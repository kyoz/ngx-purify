import { Injectable, ChangeDetectorRef } from '@angular/core';
import { PureSettingsStorageService } from './pure-settings.storage';
import { THEMES } from '../../configs/themes';
import { LANGUAGES } from '../../configs/languages';
import { BehaviorSubject } from 'rxjs';

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
  currentTheme$: BehaviorSubject<string> = new BehaviorSubject(THEMES[0].class); // Take first theme as default
  currentLang$: BehaviorSubject<string> = new BehaviorSubject('English');
  currentTextDir$: BehaviorSubject<string> = new BehaviorSubject('LTR');
  currentWidthLayout$: BehaviorSubject<string> = new BehaviorSubject('Fullwidth');

  // Subscribe variables to use as models
  currentTheme;
  currentLang;
  currentTextDir;
  currentWidthLayout;

  constructor(private _storage: PureSettingsStorageService) {
    this.currentTheme$.subscribe(theme => {
      this.currentTheme = theme;
    });

    this.currentLang$.subscribe(lang => {
      this.currentLang = lang;
    });

    this.currentTextDir$.subscribe(textDir => {
      this.currentTextDir = textDir;
    });

    this.currentWidthLayout$.subscribe(widthLayout => {
      this.currentWidthLayout = widthLayout;
    });
  }

  /**
   * SAVE SETTING FUNCTIONS
   */

  public saveThemeSetting(theme: string) {
    this._storage.storeSetting(SETTING_STORAGE_KEYS.theme, theme);
    this.currentTheme$.next(theme);
    this.updateTheme(theme);
  }

  public saveLanguageSetting(language: string) {
    this._storage.storeSetting(SETTING_STORAGE_KEYS.language, language);
    this.currentLang$.next(language);
  }

  public saveTextDirectionSetting(textDir: string) {
    this._storage.storeSetting(SETTING_STORAGE_KEYS.textDirection, textDir);
    this.currentTextDir$.next(textDir);
    this.updateTextDirection(textDir);
  }

  public saveWidthLayoutSetting(widthLayout: string) {
    this._storage.storeSetting(SETTING_STORAGE_KEYS.widthLayout, widthLayout);
    this.currentWidthLayout$.next(widthLayout);
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
      this.currentTheme$.next(storedTheme);
      this.updateTheme(storedTheme);
    }
    if (storedLanguage) {
      this.currentLang$.next(storedLanguage);
    }
    if (storedTextDirection) {
      this.currentTextDir$.next(storedTextDirection);
      this.updateTextDirection(storedTextDirection);
    }
    if (storedWidthLayout) {
      this.currentWidthLayout$.next(storedWidthLayout);
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

      this.currentTheme$.next(THEMES[0].class);
      this.updateTheme(this.currentTheme$.value);
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
}
