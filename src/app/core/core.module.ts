import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material';

// Pure Modules
import { PureSharedModule } from '../shared/shared.module';
import { PureMockApiModule } from '../core/pure-mock-api/pure-mock-api.module';
import { PureComponentsModule } from './pure-components/pure-components.module';
import { PureContainersModule } from './pure-containers/pure-containers.module';
import { PureDirectivesModule } from './pure-directives/pure-directives.module';

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
    PureDirectivesModule
  ],
  exports: [
    PureComponentsModule,
    PureContainersModule,
    PureDirectivesModule
  ],
  providers: [],
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
