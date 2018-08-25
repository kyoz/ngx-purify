import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PureSideChatboxService } from './pure-side-chatbox.service';

@Component({
  selector: 'pure-side-chatbox',
  templateUrl: './pure-side-chatbox.component.html',
  styleUrls: ['./pure-side-chatbox.component.scss']
})
export class PureSideChatbox implements OnInit {
  @ViewChild('message_input') messageInputElement: ElementRef;

  messageInput;

  constructor(public _sideChatbox: PureSideChatboxService) {
    this._sideChatbox.getContacts();
  }

  ngOnInit() {
  }

  startConversation(contact) {
    this.clearMessageInput();
    this._sideChatbox.chooseContact(contact.id)
  }

  sendMessage() {
    this.clearMessageInput();
  }

  clearMessageInput() {
    this.messageInput = '';
    if (this.messageInputElement) {
      this.messageInputElement.nativeElement.style.height = '22px';
    }
  }

  resizeMessageInput() {
    this.messageInputElement.nativeElement.style.height = '22px';
    if (this.messageInputElement.nativeElement.scrollHeight > 58) {
      this.messageInputElement.nativeElement.style.height = this.messageInputElement.nativeElement.scrollHeight + 'px';
    }
  }

  preventEnterKey(event) {
    event.preventDefault();
  }
}
