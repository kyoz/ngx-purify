import { Injectable } from '@angular/core';

@Injectable()
export class PureSettingsStorage {

  getStoredSetting(key: string) {
    try {
    return localStorage.getItem(key);
    } catch(e) {
      return null;
    };
  }

  storeSetting(key: string, setting: string) {
    try {
      localStorage.setItem(key, setting);
    } catch(e) {}
  }

  clearStorate() {
    try {
      localStorage.clear();
    } catch(e) {}
  }
}
