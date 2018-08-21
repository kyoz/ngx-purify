import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CHATBOX_CONTACTS, CHATBOX_CONVERSASIONS } from '../data/chatbox';

@Injectable()
export class ChatBoxMockApiService {

  public getChatboxContacts() {
    return new Observable(observer => {
      observer.next(CHATBOX_CONTACTS);
      observer.complete();
    });
  }

  public getChatboxContactMessages(contactId) {
    return new Observable(observer => {
      const conversation: any = CHATBOX_CONVERSASIONS.filter(d => d.withContact === contactId);
      const messages = conversation && conversation.length > 0 ? conversation[0].messages : [];
      observer.next(messages);
      observer.complete();
    });
  }
}
