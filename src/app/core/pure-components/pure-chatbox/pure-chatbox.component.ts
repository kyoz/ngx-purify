import { Component, OnInit } from '@angular/core';
import { PureMockApiService } from '../../pure-mock-api/pure-mock-api.service';

@Component({
  selector: 'pure-chatbox',
  templateUrl: './pure-chatbox.component.html',
  styleUrls: ['./pure-chatbox.component.scss']
})
export class PureChatbox implements OnInit {

  contacts = [];

  constructor(private _mockApi: PureMockApiService) {
    this.contacts = this._mockApi.chatboxContacts;
  }

  ngOnInit() {
  }

}
