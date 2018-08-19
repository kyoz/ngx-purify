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
    this._menu.isFullWidth = this._chatbox.isFullWidth = window.innerWidth >= RESPONSIVE_BREAKPOINTS.NORMAL ? true : false;
    this._menu.init();
  }

  constructor(
    public _menu: PureMenuContainerService,
    public _chatbox: PureChatboxContainerService,
    public _notification: PureNotificationContainerService
  ) { }

  ngOnInit() {
  }

  closeBackdrop() {
    if (!this._menu.isFullWidth) {
      this._menu.close();
    }
    this._chatbox.close();
    this._notification.close()
  }
}
