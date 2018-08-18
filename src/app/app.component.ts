import { Component } from '@angular/core';
import { PureSideMenuService } from './core/pure-side-menu/pure-side-menu.service';
import { PureSideChatboxService } from './core/pure-side-chatbox/pure-side-chatbox.service';
import { PureSideNotificationService } from './core/pure-side-notification/pure-side-notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    public _menu: PureSideMenuService,
    public _chatbox: PureSideChatboxService,
    public _notification: PureSideNotificationService
  ) {

  }
}
