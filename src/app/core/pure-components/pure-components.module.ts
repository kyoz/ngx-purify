import { NgModule } from '@angular/core';
import { PureSharedModule } from '../../shared/shared.module';
import { PureDirectivesModule } from '../pure-directives/pure-directives.module';

// Components
import { PureNotification } from './pure-notification/pure-notification.component';
import { PureSideChatbox } from './pure-side-chatbox/pure-side-chatbox.component';
import { PureSideChatboxService } from './pure-side-chatbox/pure-side-chatbox.service';
import { PureToolbar } from './pure-toolbar/pure-toolbar.component';
import { PureSettings } from './pure-settings/pure-settings.component';
import { PureSettingButton } from './pure-setting-button/pure-setting-button.component';

@NgModule({
  declarations: [
    PureNotification,
    PureSideChatbox,
    PureToolbar,
    PureSettings,
    PureSettingButton
  ],
  imports: [
    PureSharedModule,
    PureDirectivesModule
  ],
  exports: [
    PureNotification,
    PureSideChatbox,
    PureToolbar,
    PureSettings,
    PureSettingButton
  ],
  providers: [
    PureSideChatboxService
  ],
})
export class PureComponentsModule {}