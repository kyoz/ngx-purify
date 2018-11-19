import { Component, OnInit, ViewChild, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import { PureChatboxContainerService } from './pure-chatbox-container.service';
import { PureChatboxService } from '../../pure-components/pure-chatbox/pure-chatbox.service';
import { PureSettingsService } from '../../pure-services/pure-settings.service';
import { PureMainContainerService } from '../pure-main-container/pure-main-container.service';
import * as Hammer from 'hammerjs';

@Component({
  selector: 'pure-chatbox-container',
  templateUrl: './pure-chatbox-container.component.html',
  styleUrls: ['./pure-chatbox-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PureChatboxContainer implements OnInit {
  @ViewChild('pure_chatbox_container') pureChatboxContainer: ElementRef;

  constructor(
    public _mainContainer: PureMainContainerService,
    public _chatboxContainer: PureChatboxContainerService,
    public _chatbox: PureChatboxService,
    public _settings: PureSettingsService) {
  }

  ngOnInit() {
    this.registerHammer();
  }

  registerHammer() {
    const hammer = new Hammer(this.pureChatboxContainer.nativeElement, {});

    // Actually, we can just use hammer.on('swipe') and detect if user swipe left or right for both
    // LTR and RTL direction, but i'v test and it not work well on mobile so for now, i do seperate em

    hammer.on('swiperight', () => {
      if (this._settings.currentTextDir$.value === 'LTR') {
        this._chatboxContainer.close();
      }
    });

    hammer.on('swipeleft', () => {
      if (this._settings.currentTextDir$.value === 'RTL') {
        this._chatboxContainer.close();
      }
    });
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
