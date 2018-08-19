import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconRegistry } from '@angular/material';

// Perfect Scrollbar
import { 
  PerfectScrollbarModule,
  PerfectScrollbarConfigInterface,
  PERFECT_SCROLLBAR_CONFIG
} from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true
};

// Pure Core Components
import { PureContainer } from './pure-container/pure-container.component';
import { PureSideMenu } from './pure-side-menu/pure-side-menu.component';
import { PureSideChatbox } from './pure-side-chatbox/pure-side-chatbox.component';
import { PureSideNotification } from './pure-side-notification/pure-side-notification.component';
import { PureChatbox } from './pure-side-chatbox/pure-chatbox/pure-chatbox.component';

// Pure Core Services 
import { PureSideMenuService } from './pure-side-menu/pure-side-menu.service';
import { PureSideChatboxService } from './pure-side-chatbox/pure-side-chatbox.service';
import { PureSideNotificationService } from './pure-side-notification/pure-side-notification.service';

// Pure Modules 
import { PureSharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    // Pure Core Components
    PureContainer,
    PureSideMenu,
    PureSideChatbox,
    PureSideNotification,
    PureChatbox

    // Pure Components
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // Perfect Scrollbar
    PerfectScrollbarModule,

    // Pure Modules
    PureSharedModule
  ],
  exports: [
    PureContainer,
    PureSideMenu,
    PureSideChatbox,
    PureSideNotification
  ],
  providers: [
    // Perfect Scrollbar
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },

    // Pure Core Services
    PureSideMenuService,
    PureSideChatboxService,
    PureSideNotificationService
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
