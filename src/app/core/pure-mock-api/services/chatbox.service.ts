import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CHATBOX_CONTACTS, CHATBOX_CONVERSASIONS } from '../data/chatbox';
import { CurrentConversation, ChatboxConversation } from '../../pure-models/chatbox';

@Injectable()
export class ChatBoxMockApiService {

  // Assume this is your api endpoint data
  private conversations = Array.from(CHATBOX_CONVERSASIONS);
  private hihi = [];

  public getChatboxContacts() {
    return new Observable(observer => {
      observer.next(CHATBOX_CONTACTS);
      observer.complete();
    });
  }

  public getConversationByContact(contactId: number): Observable<CurrentConversation> {
    return new Observable(observer => {
      const conversation: ChatboxConversation = this.conversations.find(d => d.withContact === contactId);

      observer.next({
        contactInfo: CHATBOX_CONTACTS.find(d => d.id === contactId),
        messages: conversation && conversation.messages ? conversation.messages : []
      });
      observer.complete();
    });
  }

  public sendMessage(owner: number, sender: number, message: string, createAt: Date) {
    return new Observable(observer => {
      const conversationIndex = this.conversations.findIndex(d => d.withContact === owner);
      const messages = Array.from(this.conversations[conversationIndex].messages);

      messages.push({ sender, message, createAt });
      this.conversations[conversationIndex].messages = messages;

      observer.complete();
    });
  }
}
