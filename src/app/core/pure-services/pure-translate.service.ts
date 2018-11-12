import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class PureTranslateService {
  constructor(private _translate: TranslateService) {}

  init() {
    let lang: any = localStorage.getItem('CURRENT_LANGUAGE');

    if (!lang) {
      // Set default language is english
      localStorage.setItem('CURRENT_LANGUAGE', 'en');
      lang = 'en';
    }

    this._translate.setDefaultLang(lang);
  }

  changeLanguage(langCode: 'en' | 'es' | 'zh-CN') {
    localStorage.setItem('CURRENT_LANGUAGE', langCode);
    this._translate.setDefaultLang(langCode);
  }
}
