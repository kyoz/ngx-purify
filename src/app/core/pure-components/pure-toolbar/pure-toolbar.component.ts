import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

// Pure Services
import { PureMenuContainerService } from '../../pure-containers/pure-menu-container/pure-menu-container.service';
import { PureChatboxContainerService } from '../../pure-containers/pure-chatbox-container/pure-chatbox-container.service';
import { PureNotificationContainerService } from '../../pure-containers/pure-notification-container/pure-notification-container.service';
import { PureSettingsService } from '../../pure-services/pure-settings.service';
import { PureMainContainerService } from '../../pure-containers/pure-main-container/pure-main-container.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'pure-toolbar',
  templateUrl: './pure-toolbar.component.html',
  styleUrls: ['./pure-toolbar.component.scss']
})
export class PureToolbar implements OnInit {
  isSearching = false;
  isFullScreen = false;

  _onWindowFullScreenChange = this.onWindowFullScreenChange.bind(this);

  constructor(
    public _mainContainer: PureMainContainerService,
    public _menuContainer: PureMenuContainerService,
    public _chatboxContainer: PureChatboxContainerService,
    public _notificationContainer: PureNotificationContainerService,
    public _settings: PureSettingsService,
    private _deviceDetector: DeviceDetectorService,
    private _changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit() {
    // Register for Event Handlers
    if (this._deviceDetector.isDesktop()) {
      window.addEventListener('fullscreenchange', this._onWindowFullScreenChange);
      window.addEventListener('webkitfullscreenchange', this._onWindowFullScreenChange);
      window.addEventListener('mozfullscreenchange', this._onWindowFullScreenChange);
      window.addEventListener('msfullscreenchange', this._onWindowFullScreenChange);
    }

    this._mainContainer.isFullWidth$.pipe(debounceTime(200)).subscribe(() => {
      this._changeDetector.detectChanges();
    });
  }

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

  onWindowFullScreenChange() {
    this.isFullScreen = this.isInFullScreen();
  }

  changeLanguage(langCode) {
    this._settings.saveLanguageSetting(langCode);
  }
}
