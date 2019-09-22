import { Component, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { PureChatboxContainerService } from './pure-chatbox-container.service';
import { PureChatboxService } from '../../pure-components/pure-chatbox/pure-chatbox.service';
import { PureSettingsService } from '../../pure-services/pure-settings.service';
import { PureMainContainerService } from '../pure-main-container/pure-main-container.service';

@Component({
  selector: 'pure-chatbox-container',
  templateUrl: './pure-chatbox-container.component.html',
  styleUrls: ['./pure-chatbox-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PureChatboxContainer {
  @ViewChild('pure_chatbox_container', { static: false }) pureChatboxContainer: ElementRef;

  constructor(
    public _mainContainer: PureMainContainerService,
    public _chatboxContainer: PureChatboxContainerService,
    public _chatbox: PureChatboxService,
    public _settings: PureSettingsService) {
  }

  openChatbox() {
    if (!this._chatboxContainer.isOpened$.value) {
      this._chatboxContainer.open();
    }
  }

  closeChatbox(event) {
    this._chatboxContainer.close();
    event.preventDefault();
    event.stopPropagation();
  }
}
