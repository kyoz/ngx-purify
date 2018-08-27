import { Component, OnInit, HostListener, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { PureMenuContainerService } from '../pure-menu-container/pure-menu-container.service';
import { PureChatboxContainerService } from '../pure-chatbox-container/pure-chatbox-container.service';
import { PureNotificationContainerService } from '../pure-notification-container/pure-notification-container.service';
import { RESPONSIVE_BREAKPOINTS } from '../../pure-utils/pure-configs';

@Component({
  selector: 'pure-main-container',
  templateUrl: './pure-main-container.component.html',
  styleUrls: ['./pure-main-container.component.scss']
})
export class PureMainContainer implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize() {
    // Init for side menu & chatbox
    this._menuContainer.isFullWidth = this._chatboxContainer.isFullWidth = window.innerWidth >= RESPONSIVE_BREAKPOINTS.NORMAL ? true : false;
    this._menuContainer.init();
    this._notificationContainer.init();
  }

  constructor(
    public _menuContainer: PureMenuContainerService,
    public _chatboxContainer: PureChatboxContainerService,
    public _notificationContainer: PureNotificationContainerService
  ) { }

  ngOnInit() {
  }

  closeBackdrop() {
    if (!this._menuContainer.isFullWidth) {
      this._menuContainer.close();
    }
    this._chatboxContainer.close();
    this._notificationContainer.close()
  }
}
