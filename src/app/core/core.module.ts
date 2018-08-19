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
import { PureMainContainer } from './pure-containers/pure-main-container/pure-main-container.component';
import { PureMenuContainer } from './pure-containers/pure-menu-container/pure-menu-container.component';
import { PureChatboxContainer } from './pure-containers/pure-chatbox-container/pure-chatbox-container.component';
import { PureNotificationContainer } from './pure-containers/pure-notification-container/pure-notification-container.component';
import { PureChatbox } from './pure-components/pure-chatbox/pure-chatbox.component';

// Pure Core Services 
import { PureMenuContainerService } from './pure-containers/pure-menu-container/pure-menu-container.service';
import { PureChatboxContainerService } from './pure-containers/pure-chatbox-container/pure-chatbox-container.service';
import { PureNotificationContainerService } from './pure-containers/pure-notification-container/pure-notification-container.service';

// Pure Modules 
import { PureSharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    // Pure Core Components
    PureMainContainer,
    PureMenuContainer,
    PureChatboxContainer,
    PureNotificationContainer,
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
    PureMainContainer,
    PureMenuContainer,
    PureChatboxContainer,
    PureNotificationContainer
  ],
  providers: [
    // Perfect Scrollbar
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },

    // Pure Core Services
    PureMenuContainerService,
    PureChatboxContainerService,
    PureNotificationContainerService
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
