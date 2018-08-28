import { NgModule } from '@angular/core';
import { PureSharedModule } from '../../shared/shared.module';

// Components
import { PureNotification } from './pure-notification/pure-notification.component';
import { PureSideChatbox } from './pure-side-chatbox/pure-side-chatbox.component';
import { PureSideChatboxService } from './pure-side-chatbox/pure-side-chatbox.service';

@NgModule({
  declarations: [
    PureNotification,
    PureSideChatbox
  ],
  imports: [
    PureSharedModule
  ],
  exports: [
    PureNotification,
    PureSideChatbox
  ],
  providers: [
    PureSideChatboxService
  ],
})
export class PureComponentsModule {}