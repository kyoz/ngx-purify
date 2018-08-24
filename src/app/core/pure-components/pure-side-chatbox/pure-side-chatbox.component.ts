import { Component, OnInit } from '@angular/core';
import { PureSideChatboxService } from './pure-side-chatbox.service';

@Component({
  selector: 'pure-side-chatbox',
  templateUrl: './pure-side-chatbox.component.html',
  styleUrls: ['./pure-side-chatbox.component.scss']
})
export class PureSideChatbox implements OnInit {

  constructor(public _sideChatbox: PureSideChatboxService) {
    this._sideChatbox.getContacts();
  }

  ngOnInit() {
  }

  startConversation(contact) {
    this._sideChatbox.chooseContact(contact.id)
  }
}
