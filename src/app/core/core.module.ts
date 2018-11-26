import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material';

// Pure Modules
import { PureSharedModule } from '../shared/shared.module';
import { PureMockApiModule } from '../core/pure-mock-api/pure-mock-api.module';
import { PureComponentsModule } from './pure-components/pure-components.module';
import { PureContainersModule } from './pure-containers/pure-containers.module';
import { PureDirectivesModule } from './pure-directives/pure-directives.module';

// Ngrx Redux Modules
import { EffectsModule } from '@ngrx/effects';
import { AppStateModule } from '../app-state.module';
import { PureChatboxEffects } from './pure-components/pure-chatbox/pure-chatbox.effect';

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

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // Pure Modules
    PureSharedModule,
    PureMockApiModule,
    PureComponentsModule,
    PureContainersModule,
    PureDirectivesModule,

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
     })
  ],
  exports: [
    PureComponentsModule,
    PureContainersModule,
    PureDirectivesModule
  ],
  providers: [
    // Perfect Scrollbar Global Configuration
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
})
export class PureCoreModule {
  constructor(
    @Optional() @SkipSelf() parentModule: PureCoreModule, _matIconRegistry: MatIconRegistry, _domSanitizer: DomSanitizer) {
    if (parentModule) {
      throw new Error(`PureCoreModule has already been loaded. Just import PureCoreModule in the AppModule only.`);
    }

    // Register to use more material design icons in https://materialdesignicons.com/
    _matIconRegistry.addSvgIconSet(_domSanitizer.bypassSecurityTrustResourceUrl('./assets/icon/material-design-icons.svg'));
  }
}
