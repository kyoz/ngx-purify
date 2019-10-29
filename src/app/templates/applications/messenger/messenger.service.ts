/**
 * This messenger app do use the same action and data from PureChatboxComponent
 * If you want you can create a separate actions, states for it in stores folder
 */

import { Injectable } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable, Subject } from 'rxjs';
import { GetContacts, GetConversation, SendMessage } from '../../../stores/chatbox/chatbox.actions';
import { PureSideChatboxState } from '../../../stores/chatbox/chatbox.state';
import { PureChatboxContainerService } from '../../../core/pure-containers/pure-chatbox-container/pure-chatbox-container.service';
import { ChatboxMessage, ChatboxContact } from '../../../shared/models/chatbox.model';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Injectable()
export class MessengerAppService {
  @Select(PureSideChatboxState.getContacts) contacts$: Observable<ChatboxContact>;
  @Select(PureSideChatboxState.getCurrentContact) currentContact$: Observable<ChatboxContact>;
  @Select(PureSideChatboxState.getCurrentMessages) currentMessages$: Observable<ChatboxMessage[]>;

  currentContact: ChatboxContact;
  currentMessages: ChatboxMessage[] = [];

  // To simulate the other user send message back
  sendMessageBack$ = new Subject<Date>();

  constructor(private _store: Store, private _chatboxContainer: PureChatboxContainerService) {
    this.currentContact$.subscribe(currentContact => {
      this.currentContact = currentContact;
      if (this.inConversation) {
        this._chatboxContainer.open();
      }
    });

    this.currentMessages$.subscribe((messages: ChatboxMessage[]) => {
      this.currentMessages = messages;
    });

    this.sendMessageBack$.pipe(debounceTime(500), distinctUntilChanged()).subscribe(() => {
      this.sendMessageBack();
    });
  }

  public get inConversation() {
    return this.currentContact !== undefined;
  }

  public get conversationContact() {
    return this.currentContact ? this.currentContact.id : '';
  }

  /**
   * Dispatch Functions
   */

  public getContacts() {
    this._store.dispatch(new GetContacts());
  }

  public chooseContact(contactId: number) {
    this._store.dispatch(new GetConversation(contactId));
  }

  public sendMessage(message: string) {
    this._store.dispatch(new SendMessage({
      sender: 0, // Me
      message,
      createAt: new Date()
    }));

    // To simulate the other user send message back
    this.sendMessageBack$.next(new Date());
  }

  private sendMessageBack() {
    this._store.dispatch(new SendMessage({
      sender: this.currentContact.id,
      message: 'I am Grootttt',
      createAt: new Date()
    }));
  }
}
