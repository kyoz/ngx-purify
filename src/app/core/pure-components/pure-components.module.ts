import { NgModule } from '@angular/core';

// Modules
import { PureSharedModule } from '../../shared/shared.module';
import { PureDirectivesModule } from '../pure-directives/pure-directives.module';

// Components
import { PureNotification } from './pure-notification/pure-notification.component';
import { PureChatbox } from './pure-chatbox/pure-chatbox.component';
import { PureToolbar } from './pure-toolbar/pure-toolbar.component';
import { PureSettings } from './pure-settings/pure-settings.component';
import { PureSettingButton } from './pure-setting-button/pure-setting-button.component';
import { PureMenu } from './pure-menu/pure-menu.component';
import { PureMenuItem } from './pure-menu-item/pure-menu-item.component';

// Services
import { PureChatboxService } from './pure-chatbox/pure-chatbox.service';
import { PureMenuService } from './pure-menu/pure-menu.service';

@NgModule({
  declarations: [
    PureNotification,
    PureChatbox,
    PureToolbar,
    PureSettings,
    PureMenu,
    PureSettingButton,
    PureMenuItem
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
    PureSettingButton,
    PureMenuItem
  ],
  providers: [
    PureChatboxService,
    PureMenuService
  ],
})
export class PureComponentsModule {}
