import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material/icon';

// Pure Modules
import { PureSharedModule } from '../shared/shared.module';
import { PureMockApiModule } from '../core/pure-mock-api/pure-mock-api.module';
import { PureComponentsModule } from './pure-components/pure-components.module';
import { PureContainersModule } from './pure-containers/pure-containers.module';
import { PureDirectivesModule } from './pure-directives/pure-directives.module';

// Services
import { PureGlobalService } from './pure-services/pure-global.service';
import { PureSettingsService } from './pure-services/pure-settings.service';
import { PureSettingsStorageService } from './pure-services/pure-settings.storage';

// Translator
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
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


// Highlightjs
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

export function getHighlightLanguages() {
  return {
    typescript: () => import('highlight.js/lib/languages/typescript'),
    scss: () => import('highlight.js/lib/languages/scss'),
    xml: () => import('highlight.js/lib/languages/xml')
  };
}

const PURE_CORE_MODULES = [
  PureComponentsModule,
  PureContainersModule,
  PureDirectivesModule,
];

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
    ...PURE_CORE_MODULES,

    // Translator
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    // Highlightjs
    HighlightModule
  ],
  exports: [
    ...PURE_CORE_MODULES
  ],
  providers: [
    PureGlobalService,
    PureSettingsService,
    PureSettingsStorageService,

    // Highlightjs Global Configuration
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('highlight.js/lib/core'),
        languages: getHighlightLanguages()
      }
    },

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
