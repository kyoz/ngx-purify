import { Component, OnInit, HostListener, ChangeDetectionStrategy, ViewEncapsulation, Input } from '@angular/core';
import { RESPONSIVE_BREAKPOINTS } from '../../pure-utils/pure-configs';

// Services
import { PureMenuContainerService } from '../pure-menu-container/pure-menu-container.service';
import { PureChatboxContainerService } from '../pure-chatbox-container/pure-chatbox-container.service';
import { PureNotificationContainerService } from '../pure-notification-container/pure-notification-container.service';
import { PureSettingsContainerService } from '../pure-settings-container/pure-settings-container.service';
import { PureSettingsService } from '../../pure-services/pure-settings.service';
import { PureMainContainerService } from './pure-main-container.service';

@Component({
  selector: 'pure-main-container',
  templateUrl: './pure-main-container.component.html',
  styleUrls: ['./pure-main-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PureMainContainer implements OnInit {
  @Input() minimalMode = false;
  @HostListener('window:resize', ['$event'])
  onResize() {
    // Init for side menu & chatbox
    this._mainContainer.isFullWidth$.next(window.innerWidth >= RESPONSIVE_BREAKPOINTS.NORMAL ? true : false);
    this._menuContainer.reset();
    this._notificationContainer.reset();
  }

  constructor(
    public _mainContainer: PureMainContainerService,
    public _menuContainer: PureMenuContainerService,
    public _chatboxContainer: PureChatboxContainerService,
    public _notificationContainer: PureNotificationContainerService,
    public _settingsContainer: PureSettingsContainerService,
    public _settings: PureSettingsService
  ) { }

  ngOnInit() {
    // Init for pure settings
    this._settings.init();
  }

  closeBackdrop() {
    if (!this._mainContainer.isFullWidth$.value) {
      this._menuContainer.close();
    }
    this._chatboxContainer.close();
    this._notificationContainer.close()
  }
}
