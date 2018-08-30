import { NgModule } from '@angular/core';
import { PureSharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';

// Components
import { PureNotification } from './pure-notification/pure-notification.component';
import { PureSideChatbox } from './pure-side-chatbox/pure-side-chatbox.component';
import { PureSideChatboxService } from './pure-side-chatbox/pure-side-chatbox.service';
import { PureSettingButton } from './pure-setting-button/pure-setting-button.component';
import { PureToolbar } from './pure-toolbar/pure-toolbar.component';

@NgModule({
  declarations: [
    PureNotification,
    PureSideChatbox,
    PureToolbar,
    PureSettingButton
  ],
  imports: [
    PureSharedModule,
    RouterModule
  ],
  exports: [
    PureNotification,
    PureSideChatbox,
    PureToolbar,
    PureSettingButton
  ],
  providers: [
    PureSideChatboxService
  ],
})
export class PureComponentsModule {}