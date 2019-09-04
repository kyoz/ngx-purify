import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CHATBOX_CONTACTS, CHATBOX_CONVERSASIONS } from '../data/chatbox';
import { CurrentConversation } from '../../pure-models/chatbox';

@Injectable()
export class ChatBoxMockApiService {

  public getChatboxContacts() {
    return new Observable(observer => {
      observer.next(CHATBOX_CONTACTS);
      observer.complete();
    });
  }

  public getConversationByContact(contactId): Observable<CurrentConversation> {
    return new Observable(observer => {
      const conversation: any = CHATBOX_CONVERSASIONS.filter(d => d.withContact === contactId);

      observer.next({
        contactInfo: CHATBOX_CONTACTS.filter(d => d.id === contactId)[0],
        messages: conversation && conversation.length > 0 ? conversation[0].messages : []
      });
      observer.complete();
    });
  }
}
