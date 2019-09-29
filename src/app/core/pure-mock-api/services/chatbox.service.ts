import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CHATBOX_CONTACTS, CHATBOX_CONVERSASIONS } from '../data/chatbox';
import { ChatboxConversation, CurrentConversation } from '../../../shared/models/chatbox.model';

@Injectable()
export class ChatBoxMockApiService {

  // Assume this data that you got from server
  private conversations = Array.from(CHATBOX_CONVERSASIONS);

  // To generate new unique id so that angular trackBy will work properly
  // In real app, this id will easily generate by your database
  private genNewMessageId() {
    let max = 0;

    for (const conversation of this.conversations) {
      for (const message of conversation.messages) {
        if (max < message.id) {
          max = message.id;
        }
      }
    }

    return max + 1;
  }

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
        contact: CHATBOX_CONTACTS.find(d => d.id === contactId),
        messages: conversation && conversation.messages ? conversation.messages : []
      });

      observer.complete();
    });
  }

  public sendMessage(owner: number, sender: number, message: string, createAt: Date) {
    return new Observable(observer => {
      const conversationIndex = this.conversations.findIndex(d => d.withContact === owner);
      const messages = Array.from(this.conversations[conversationIndex].messages);
      const newMessage = {
        id: this.genNewMessageId(),
        sender,
        message,
        createAt
      };

      messages.push(newMessage);

      this.conversations[conversationIndex].messages = messages;

      observer.next(newMessage);
      observer.complete();
    });
  }
}
