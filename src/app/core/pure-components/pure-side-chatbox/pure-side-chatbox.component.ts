import { Component, OnInit } from '@angular/core';
import { PureMockApiService } from '../../pure-mock-api/pure-mock-api.service';

@Component({
  selector: 'pure-side-chatbox',
  templateUrl: './pure-side-chatbox.component.html',
  styleUrls: ['./pure-side-chatbox.component.scss']
})
export class PureSideChatbox implements OnInit {

  contacts = [];

  constructor(private _mockApi: PureMockApiService) {
    this.contacts = this._mockApi.chatboxContacts;
  }

  ngOnInit() {
  }

}
