import { NgModule } from '@angular/core';
import { PureSharedModule } from '../../shared/shared.module';

// Components
import { PureChatboxContainer } from './pure-chatbox-container/pure-chatbox-container.component';
import { PureMainContainer } from './pure-main-container/pure-main-container.component';
import { PureMenuContainer } from './pure-menu-container/pure-menu-container.component';
import { PureNotificationContainer } from './pure-notification-container/pure-notification-container.component';

// Services
import { PureChatboxContainerService } from './pure-chatbox-container/pure-chatbox-container.service';
import { PureMenuContainerService } from './pure-menu-container/pure-menu-container.service';
import { PureNotificationContainerService } from './pure-notification-container/pure-notification-container.service';
import { PureComponentsModule } from '../pure-components/pure-components.module';

@NgModule({
  declarations: [
    PureChatboxContainer,
    PureMainContainer,
    PureMenuContainer,
    PureNotificationContainer
  ],
  imports: [ 
    PureSharedModule,
    PureComponentsModule
  ],
  exports: [
    PureChatboxContainer,
    PureMainContainer,
    PureMenuContainer,
    PureNotificationContainer
  ],
  providers: [
    PureChatboxContainerService,
    PureMenuContainerService,
    PureNotificationContainerService
  ],
})
export class PureContainersModule {}
