import { Component } from '@angular/core';
import { PureMenuContainerService } from '../../pure-containers/pure-menu-container/pure-menu-container.service';
import { PureChatboxContainerService } from '../../pure-containers/pure-chatbox-container/pure-chatbox-container.service';
import { PureNotificationContainerService } from '../../pure-containers/pure-notification-container/pure-notification-container.service';

@Component({
  selector: 'pure-toolbar',
  templateUrl: './pure-toolbar.component.html',
  styleUrls: ['./pure-toolbar.component.scss']
})
export class PureToolbar{

  isSearching = false;

  constructor(
    public _menuContainer: PureMenuContainerService,
    public _chatboxContainer: PureChatboxContainerService,
    public _notificationContainer: PureNotificationContainerService
  ) { }

  toggleSearch() {
    this.isSearching = !this.isSearching;
  }

  requestFullscreen() {
    const demo: any = document.getElementById('pure-admin-dashboard');
    if (demo.requestFullscreen) {
      demo.requestFullscreen();
    } else if (demo.mozRequestFullScreen) { /* Firefox */
      demo.mozRequestFullScreen();
    } else if (demo.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      demo.webkitRequestFullscreen();
    } else if (demo.msRequestFullscreen) { /* IE/Edge */
      demo.msRequestFullscreen();
    }
  }
}
