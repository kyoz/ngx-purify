import { Injectable } from '@angular/core';
import { CHATBOX_CONTACTS, CHATBOX_CONVERSASIONS } from './data/chatbox';

@Injectable()
export class PureMockApiService {

  public get chatboxContacts() {
    return CHATBOX_CONTACTS;
  }

  public get chatboxConversations() {
    return CHATBOX_CONVERSASIONS;
  }
}
