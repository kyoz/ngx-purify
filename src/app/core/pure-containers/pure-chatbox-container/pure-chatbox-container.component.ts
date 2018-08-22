import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PureChatboxContainerService } from './pure-chatbox-container.service';
import * as Hammer from 'hammerjs';

@Component({
  selector: 'pure-chatbox-container',
  templateUrl: './pure-chatbox-container.component.html',
  styleUrls: ['./pure-chatbox-container.component.scss']
})
export class PureChatboxContainer implements OnInit {
  @ViewChild('pure_side_chatbox') pureSideChatbox: ElementRef;

  constructor(
    public _chatbox: PureChatboxContainerService) {
  }

  ngOnInit() {
    this.registerHammer();
  }

  registerHammer() {
    const hammer = new Hammer(this.pureSideChatbox.nativeElement, {});
    hammer.on('swiperight', ev => {
      this._chatbox.close();
    });
  }

  openChatbox() {
    if (this._chatbox.isClosed) {
      this._chatbox.open(); 
    }
  }

  closeChatbox(event) {
    this._chatbox.close();
    event.preventDefault();
    event.stopPropagation();
  }
}
