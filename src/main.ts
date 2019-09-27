import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import 'hammerjs';

// This timeout is too make sure all image, translator is done before we hide the loader
// If your app is small and doesn't have any image, you can try reduce this timeout
const WAIT_FOR_RENDERING_TIMEOUT = 500;

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
    }, WAIT_FOR_RENDERING_TIMEOUT);
  })
  .catch(err => console.error(err));
