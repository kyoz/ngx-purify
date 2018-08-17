import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material';

// Pure Core Components
import { PureContainer } from './pure-container/pure-container.component';
import { PureSideMenu } from './pure-side-menu/pure-side-menu.component';
import { PureSideChatbox } from './pure-side-chatbox/pure-side-chatbox.component';

// Pure Core Services 
import { PureSideMenuService } from './pure-side-menu/pure-side-menu.service';
import { PureSideChatboxService } from './pure-side-chatbox/pure-side-chatbox.service';

// Pure Modules 
import { PureSharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    // Pure Core Components
    PureContainer,
    PureSideMenu,
    PureSideChatbox,

    // Pure Components
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // Pure Modules
    PureSharedModule
  ],
  exports: [
    PureContainer,
    PureSideMenu,
    PureSideChatbox
  ],
  providers: [
    // Pure Core Services
    PureSideMenuService,
    PureSideChatboxService
  ],
})
export class PureCoreModule {
  constructor(
    @Optional() @SkipSelf() parentModule: PureCoreModule, _matIconRegistry: MatIconRegistry, _domSanitizer: DomSanitizer) {
    if (parentModule) {
      throw new Error(`PureCoreModule has already been loaded. Just import PureCoreModule in the AppModule only.`);
    }

    // Register to use more material design icons in https://materialdesignicons.com/
    _matIconRegistry.addSvgIconSet(_domSanitizer.bypassSecurityTrustResourceUrl('./assets/icons/material-design-icons.svg'));
  }
}
