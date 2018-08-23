import { Component } from '@angular/core';
import { PureMenuContainerService } from './core/pure-containers/pure-menu-container/pure-menu-container.service';
import { PureChatboxContainerService } from './core/pure-containers/pure-chatbox-container/pure-chatbox-container.service';
import { PureNotificationContainerService } from './core/pure-containers/pure-notification-container/pure-notification-container.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public _menuContainer: PureMenuContainerService,
    public _chatboxContainer: PureChatboxContainerService,
    public _notificationContainer: PureNotificationContainerService
  ) {

  }
}
