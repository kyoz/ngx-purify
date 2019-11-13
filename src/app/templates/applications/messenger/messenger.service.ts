/**
 * This messenger app do use the same action and data from PureChatboxComponent
 * If you want you can create a separate actions, states for it in stores folder
 * Or use same service for both side chatbox and chatbox app
 */

import { Injectable } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable, Subject } from 'rxjs';
import { GetContacts, GetConversation, SendMessage } from '../../../stores/chatbox/chatbox.actions';
import { PureSideChatboxState } from '../../../stores/chatbox/chatbox.state';
import { PureMockApiService } from '../../../core/pure-mock-api/pure-mock-api.service';
import { ChatboxMessage, ChatboxContact } from '../../../shared/models/chatbox.model';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, debounceTime, skip } from 'rxjs/operators';

@Injectable()
export class MessengerAppService {
  @Select(PureSideChatboxState.getContacts) contacts$: Observable<ChatboxContact[]>;
  @Select(PureSideChatboxState.getCurrentContact) currentContact$: Observable<ChatboxContact>;
  @Select(PureSideChatboxState.getCurrentMessages) currentMessages$: Observable<ChatboxMessage[]>;

  filteredContacts$: BehaviorSubject<ChatboxContact[]> = new BehaviorSubject([]);

  contacts: ChatboxContact[] = [];
  currentContact: ChatboxContact;
  currentMessages: ChatboxMessage[] = [];

  searchContact$ = new BehaviorSubject('');
  // To simulate the other user send message back
  sendMessageBack$ = new Subject<Date>();

  constructor(
    private _store: Store,
    private _api: PureMockApiService
  ) {
    this.contacts$.subscribe(contacts => {
      this.contacts = contacts;
      this.filteredContacts$.next(contacts);
    });

    this.currentContact$.subscribe(currentContact => {
      this.currentContact = currentContact;
    });

    this.currentMessages$.subscribe((messages: ChatboxMessage[]) => {
      this.currentMessages = messages;
    });

    this.searchContact$.pipe(skip(1), distinctUntilChanged(), debounceTime(200)).subscribe(searchTerm => {
      this.filteredContacts$.next(
        this.contacts.filter(d => d.name.trim().toLowerCase()
          .indexOf(searchTerm.trim().toLowerCase()) !== -1)
      );
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

  public getLatestMessage(contactId: number) {
    return this._api.chatbox.getLatestMessageByContact(contactId);
  }

  private sendMessageBack() {
    this._store.dispatch(new SendMessage({
      sender: this.currentContact.id,
      message: 'I am Grootttt',
      createAt: new Date()
    }));
  }
}
