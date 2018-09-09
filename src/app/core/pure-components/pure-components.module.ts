import { NgModule } from '@angular/core';
import { PureSharedModule } from '../../shared/shared.module';
import { PureDirectivesModule } from '../pure-directives/pure-directives.module';

// Components
import { PureNotification } from './pure-notification/pure-notification.component';
import { PureChatbox } from './pure-chatbox/pure-chatbox.component';
import { PureToolbar } from './pure-toolbar/pure-toolbar.component';
import { PureSettings } from './pure-settings/pure-settings.component';
import { PureSettingButton } from './pure-setting-button/pure-setting-button.component';
import { PureMenu } from './pure-menu/pure-menu.component';

// Services
import { PureChatboxService } from './pure-chatbox/pure-chatbox.service';
import { PureSettingsService } from '../pure-services/pure-settings.service';
import { PureSettingsStorageService } from '../pure-services/pure-settings.storage';

@NgModule({
  declarations: [
    PureNotification,
    PureChatbox,
    PureToolbar,
    PureSettings,
    PureMenu,
    PureSettingButton
  ],
  imports: [
    PureSharedModule,
    PureDirectivesModule
  ],
  exports: [
    PureNotification,
    PureChatbox,
    PureToolbar,
    PureSettings,
    PureMenu,
    PureSettingButton
  ],
  providers: [
    PureChatboxService,
    PureSettingsService,
    PureSettingsStorageService
  ],
})
export class PureComponentsModule {}