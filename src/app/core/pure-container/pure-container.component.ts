import { Component, OnInit, HostListener, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { PureSideMenuService } from '../pure-side-menu/pure-side-menu.service';
import { PureSideChatboxService } from '../pure-side-chatbox/pure-side-chatbox.service';
import { PureSideNotificationService } from '../pure-side-notification/pure-side-notification.service';
import { RESPONSIVE_BREAKPOINTS } from '../pure-utils/pure-configs';

@Component({
  selector: 'pure-container',
  templateUrl: './pure-container.component.html',
  styleUrls: ['./pure-container.component.scss']
})
export class PureContainer implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize() {
    // Init for side menu & chatbox
    this._menu.isFullWidth = this._chatbox.isFullWidth = window.innerWidth >= RESPONSIVE_BREAKPOINTS.NORMAL ? true : false;
    this._menu.init();
  }

  constructor(
    public _menu: PureSideMenuService,
    public _chatbox: PureSideChatboxService,
    public _notification: PureSideNotificationService
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
