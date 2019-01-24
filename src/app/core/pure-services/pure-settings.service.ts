import { Injectable } from '@angular/core';
import { THEMES } from '../../configs/themes';
import { LANGUAGES } from '../../configs/languages';
import { PureSettingsStorageService } from './pure-settings.storage';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

export const SETTING_STORAGE_KEYS = {
  theme: 'pure-current-theme',
  language: 'pure-current-language',
  textDirection: 'pure-current-text-direction',
  widthLayout: 'pure-current-width-layout'
};

export const SETTINGS = {
  THEMES: THEMES,
  LANGUAGES: LANGUAGES,
  TEXT_DIRECTIONS: ['ltr', 'rtl'],
  WIDTH_LAYOUTS: ['Fullwidth', 'Boxed']
};

@Injectable()
export class PureSettingsService {
  // Init and also set default settings
  currentTheme$: BehaviorSubject<string> = new BehaviorSubject('');
  currentLang$: BehaviorSubject<string> = new BehaviorSubject('');
  currentTextDir$: BehaviorSubject<string> = new BehaviorSubject('');
  currentWidthLayout$: BehaviorSubject<string> = new BehaviorSubject('');
  disableAnimation$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  currentTheme;
  currentLang;
  currentTextDir;
  currentWidthLayout;
  disableAnimation;

  constructor(
    private _storage: PureSettingsStorageService,
    private _translate: TranslateService) {
      // Only allow animation after dir setting done
      this.disableAnimation$.pipe(distinctUntilChanged()).subscribe(res => {
        if (res) {
          // Enable animation back after 300ms
          setTimeout(() => {
            this.disableAnimation$.next(false);
          }, 300);
        }
      });

      this.initSupscription();
  }

  initSupscription() {
    this.currentTheme$.pipe(distinctUntilChanged()).subscribe(currentTheme => {
      this.currentTheme = currentTheme;
    });
    this.currentLang$.pipe(distinctUntilChanged()).subscribe(currentLang => {
      this.currentLang = currentLang;
    });
    this.currentTextDir$.pipe(distinctUntilChanged()).subscribe(currentTextDir => {
      this.currentTextDir = currentTextDir;
    });
    this.currentWidthLayout$.pipe(distinctUntilChanged()).subscribe(currentWidthLayout => {
      this.currentWidthLayout = currentWidthLayout;
    });
    this.disableAnimation$.pipe(distinctUntilChanged()).subscribe(disableAnimation => {
      this.disableAnimation = disableAnimation;
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
    this.updateLanguage(language);
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
    // Get stored settings
    let storedTheme: string = this._storage.getStoredSetting(SETTING_STORAGE_KEYS.theme);
    let storedLanguage = this._storage.getStoredSetting(SETTING_STORAGE_KEYS.language);
    let storedTextDirection = this._storage.getStoredSetting(SETTING_STORAGE_KEYS.textDirection);
    let storedWidthLayout = this._storage.getStoredSetting(SETTING_STORAGE_KEYS.widthLayout);

    // Set default settings
    storedTheme = storedTheme ? storedTheme : THEMES[0].class;
    storedLanguage = storedLanguage ? storedLanguage : LANGUAGES[0].key;
    storedTextDirection = storedTextDirection ? storedTextDirection : 'LTR';
    storedWidthLayout = storedWidthLayout ? storedWidthLayout : 'Fullwidth';

    // Update settings to view
    this.updateTheme(storedTheme);
    this.updateLanguage(storedLanguage);
    this.updateTextDirection(storedTextDirection);
    this.updateWidthLayout(storedWidthLayout);
  }

  /**
   * UPDATE FUNCTIONS
   */

  updateTheme(themeClass: string) {
    if (!document.getElementById('PURE_ADMIN_DASHBOARD')) {
      console.error(`Can't find app !`);
      return;
    }

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
      this.currentTheme$.next(newThemeClass);
    } else {

      // In some case, due to the configuration of adding or remove theme class.
      // The current theme store in storage doesn't match any current theme
      // So reset to the default theme (Need at least one theme)

      this.currentTheme$.next(THEMES[0].class);
      this.updateTheme(this.currentTheme$.value);
    }
  }

  updateLanguage(langKey: string) {
    langKey = langKey ? langKey : LANGUAGES[0].key; // If stored langKey is not exist in app, set first lang found
    this._translate.setDefaultLang(langKey);
    this.currentLang$.next(langKey);
  }

  updateTextDirection(textDirection: string) {
    switch (textDirection) {
      case 'rtl':
        // document.body.setAttribute('dir', 'rtl');
        this.currentTextDir$.next('rtl');
        break;
      default:
        // document.body.removeAttribute('dir');
        this.currentTextDir$.next('ltr');
    }

    // Disable animation
    this.disableAnimation$.next(true);
  }

  updateWidthLayout(widthLayout: string) {
    if (!document.getElementById('PURE_MAIN_CONTAINER')) {
      console.error(`Cant find main container !`);
      return;
    }

    switch (widthLayout) {
      case 'Boxed':
        document.getElementById('PURE_MAIN_CONTAINER').classList.add('boxed');
        this.currentWidthLayout$.next('Boxed');
        break;
      default:
        document.getElementById('PURE_MAIN_CONTAINER').classList.remove('boxed');
        this.currentWidthLayout$.next('Fullwidth');
    }
  }
}
