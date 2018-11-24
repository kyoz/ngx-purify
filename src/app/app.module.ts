import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';

// App Router
import { AppRoutingModule } from './app.routing';

// Pure Modules
import { PureCoreModule } from './core/core.module';
import { PureSharedModule } from './shared/shared.module';

// Components
import { AppComponent } from './app.component';
import { MainContainer } from './containers/main-container/main-container.component';
import { MinimalContainer } from './containers/minimal-container/minimal-container.component';

// Ngrx Redux Modules
import { EffectsModule } from '@ngrx/effects';
import { AppStateModule } from './app-state.module';
import { PureChatboxEffects } from './core/pure-components/pure-chatbox/pure-chatbox.effect';

// Device Detectors
import { DeviceDetectorModule } from 'ngx-device-detector';

// Translator
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

// Perfect Scrollbar
import {
  PerfectScrollbarConfigInterface,
  PERFECT_SCROLLBAR_CONFIG
} from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true,
  suppressScrollX: true
};

import { HighlightModule } from 'ngx-highlightjs';

import xml from 'highlight.js/lib/languages/xml';
import scss from 'highlight.js/lib/languages/scss';
import typescript from 'highlight.js/lib/languages/typescript';

export function hljsLanguages() {
  return [
    {name: 'typescript', func: typescript},
    {name: 'scss', func: scss},
    {name: 'xml', func: xml}
  ];
}

@NgModule({
  declarations: [
    AppComponent,
    MainContainer,
    MinimalContainer
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    // App Router
    AppRoutingModule,

    // Pure Modules
    PureCoreModule,
    PureSharedModule,

    // Ngrx Redux Modules
    AppStateModule,
    EffectsModule.forRoot([
      PureChatboxEffects
    ]),

    // Device Detectors
    DeviceDetectorModule.forRoot(),

    // Translator
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    // Highlightjs
    HighlightModule.forRoot({
      languages: hljsLanguages
    })
  ],
  providers: [
    // Perfect Scrollbar Global Configuration
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
