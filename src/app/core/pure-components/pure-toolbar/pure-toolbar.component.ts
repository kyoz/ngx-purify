import { Component, HostListener } from '@angular/core';
import { PureMenuContainerService } from '../../pure-containers/pure-menu-container/pure-menu-container.service';
import { PureChatboxContainerService } from '../../pure-containers/pure-chatbox-container/pure-chatbox-container.service';
import { PureNotificationContainerService } from '../../pure-containers/pure-notification-container/pure-notification-container.service';
import { PureSettingsService } from '../../pure-services/pure-settings.service';

@Component({
  selector: 'pure-toolbar',
  templateUrl: './pure-toolbar.component.html',
  styleUrls: ['./pure-toolbar.component.scss']
})
export class PureToolbar {
  @HostListener('window:fullscreenchange', ['$event'])
  @HostListener('window:webkitfullscreenchange', ['$event'])
  @HostListener('window:mozfullscreenchange', ['$event'])
  @HostListener('window:msfullscreenchange', ['$event'])
  onFullScreenChange() {
    this.isFullScreen = this.isInFullScreen();
  }

  isSearching = false;
  isFullScreen = false;

  constructor(
    public _menuContainer: PureMenuContainerService,
    public _chatboxContainer: PureChatboxContainerService,
    public _notificationContainer: PureNotificationContainerService,
    public _settings: PureSettingsService
  ) {}

  toggleSearch() {
    this.isSearching = !this.isSearching;
  }

  toggleFullscreen() {
    if (!this.isInFullScreen()) {
      const demo: any = document.getElementById('PURE_ADMIN_DASHBOARD');
      if (demo.requestFullscreen) {
        demo.requestFullscreen();
      } else if (demo.mozRequestFullScreen) { /* Firefox */
        demo.mozRequestFullScreen();
      } else if (demo.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        demo.webkitRequestFullscreen();
      } else if (demo.msRequestFullscreen) { /* IE/Edge */
        demo.msRequestFullscreen();
      }
    } else {
      if (document['exitFullscreen']) {
        document['exitFullscreen']();
      } else if (document['mozCancelFullScreen']) { /* Firefox */
        document['mozCancelFullScreen']();
      } else if (document['webkitExitFullscreen']) { /* Chrome, Safari and Opera */
        document['webkitExitFullscreen']();
      } else if (document['msExitFullscreen']) { /* IE/Edge */
        document['msExitFullscreen']();
      }
    }
  }

  isInFullScreen() {
    return (document['fullscreenElement'] && document['fullscreenElement'] !== null) ||
    (document['webkitFullscreenElement'] && document['webkitFullscreenElement'] !== null) ||
    (document['mozFullScreenElement'] && document['mozFullScreenElement'] !== null) ||
    (document['msFullscreenElement'] && document['msFullscreenElement'] !== null);
  }
}
