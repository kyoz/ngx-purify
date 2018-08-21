import { Injectable } from '@angular/core';
import { CHATBOX_CONTACTS, CHATBOX_CONVERSASIONS } from '../data/chatbox';

@Injectable()
export class ChatBoxMockApiService {

  public getChatboxContacts() {
    return CHATBOX_CONTACTS;
  }

  public getChatboxContactMessages(contactId) {
    const conversation: any = CHATBOX_CONVERSASIONS.filter(d => d.withContact === contactId);
    return conversation && conversation.length > 0 ? conversation[0].messages : [];
  }

}