import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PureSideChatboxService } from './pure-side-chatbox.service';
import * as Hammer from 'hammerjs';

@Component({
  selector: 'pure-side-chatbox',
  templateUrl: './pure-side-chatbox.component.html',
  styleUrls: ['./pure-side-chatbox.component.scss']
})
export class PureSideChatbox implements OnInit {
  @ViewChild('pure_side_chatbox') pureSideChatbox: ElementRef;

  constructor(
    public _chatbox: PureSideChatboxService) {
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
}
