import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PureChatboxContainerService } from './pure-chatbox-container.service';
import { PureSideChatboxService } from '../../pure-components/pure-side-chatbox/pure-side-chatbox.service';
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
    public _sideChatbox: PureSideChatboxService) {
  }

  ngOnInit() {
    this.registerHammer();
  }

  registerHammer() {
    const hammer = new Hammer(this.pureChatboxContainer.nativeElement, {});
    hammer.on('swiperight', ev => {
      this._chatboxContainer.close();
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
