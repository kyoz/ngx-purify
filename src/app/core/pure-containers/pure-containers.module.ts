import { NgModule } from '@angular/core';

// Modules
import { PureSharedModule } from '../../shared/shared.module';
import { PureComponentsModule } from '../pure-components/pure-components.module';

// Components
import { PureMainContainer } from './pure-main-container/pure-main-container.component';
import { PureChatboxContainer } from './pure-chatbox-container/pure-chatbox-container.component';
import { PureMenuContainer } from './pure-menu-container/pure-menu-container.component';
import { PureNotificationContainer } from './pure-notification-container/pure-notification-container.component';
import { PureSettingsContainer } from './pure-settings-container/pure-settings-container.component';

// Services
import { PureChatboxContainerService } from './pure-chatbox-container/pure-chatbox-container.service';
import { PureMenuContainerService } from './pure-menu-container/pure-menu-container.service';
import { PureNotificationContainerService } from './pure-notification-container/pure-notification-container.service';
import { PureSettingsContainerService } from './pure-settings-container/pure-settings-container.service';
import { PureMainContainerService } from './pure-main-container/pure-main-container.service';

@NgModule({
  declarations: [
    PureMainContainer,
    PureChatboxContainer,
    PureMenuContainer,
    PureNotificationContainer,
    PureSettingsContainer
  ],
  imports: [ 
    PureSharedModule,
    PureComponentsModule
  ],
  exports: [
    PureMainContainer,
    PureChatboxContainer,
    PureMenuContainer,
    PureNotificationContainer,
    PureSettingsContainer
  ],
  providers: [
    PureMainContainerService,
    PureChatboxContainerService,
    PureMenuContainerService,
    PureNotificationContainerService,
    PureSettingsContainerService
  ],
})
export class PureContainersModule {}
