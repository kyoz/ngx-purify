import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PureChatboxContainerService } from './pure-chatbox-container.service';
import { PureChatboxService } from '../../pure-components/pure-chatbox/pure-chatbox.service';
import { PureSettingsService } from '../../pure-services/pure-settings.service';
import * as Hammer from 'hammerjs';

@Component({
  selector: 'pure-chatbox-container',
  templateUrl: './pure-chatbox-container.component.html',
  styleUrls: ['./pure-chatbox-container.component.scss']
})
export class PureChatboxContainer implements OnInit {
  @ViewChild('pure_chatbox_container') pureChatboxContainer: ElementRef;

  constructor(
    public _chatboxContainer: PureChatboxContainerService,
    public _chatbox: PureChatboxService,
    public _settings: PureSettingsService) {
  }

  ngOnInit() {
    this.registerHammer();
  }

  registerHammer() {
    const hammer = new Hammer(this.pureChatboxContainer.nativeElement, {});

    hammer.on('swipe', event => {
      if (event.direction === 4 && this._settings.textDirection === 'LTR') { // Right
        this._chatboxContainer.close();
      }
      if (event.direction === 2 && this._settings.textDirection === 'RTL') { // Left
        this._chatboxContainer.close();
      }
    });
  }

  openChatbox() {
    if (this._chatboxContainer.isClosed) {
      this._chatboxContainer.open(); 
    }
  }

  closeChatbox(event) {
    this._chatboxContainer.close();
    event.preventDefault();
    event.stopPropagation();
  }
}
