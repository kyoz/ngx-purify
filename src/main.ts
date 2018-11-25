import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(() => {
    setTimeout(() => {
      const splashScreen = document.getElementById('PURE_SPLASH_SCREEN');
      if (splashScreen && splashScreen.classList) {
        splashScreen.classList.add('pure-splash-screen-loaded');
      }
    }, 500);
  })
  .catch(err => console.log(err));
