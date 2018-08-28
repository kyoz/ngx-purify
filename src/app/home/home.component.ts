import { Component, ViewChild, ElementRef } from '@angular/core';
import { PureMenuContainerService } from '../core/pure-containers/pure-menu-container/pure-menu-container.service';
import { PureChatboxContainerService } from '../core/pure-containers/pure-chatbox-container/pure-chatbox-container.service';
import { PureNotificationContainerService } from '../core/pure-containers/pure-notification-container/pure-notification-container.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('search_input') searchInput: ElementRef;

  isSearching = false;

  constructor(
    public _menuContainer: PureMenuContainerService,
    public _chatboxContainer: PureChatboxContainerService,
    public _notificationContainer: PureNotificationContainerService
  ) { }

  toggleSearch() {
    this.isSearching = !this.isSearching;
    setTimeout(() => {
      if (this.isSearching && this.searchInput) {
        this.searchInput.nativeElement.focus();
      }
    }, 100);
  }
}
