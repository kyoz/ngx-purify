import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { IAppState } from '../../../types/app-state';
import { getContacts, getCurrentConversation } from './pure-chatbox.selector';
import { PureChatboxContainerService } from '../../pure-containers/pure-chatbox-container/pure-chatbox-container.service';
import { ICurrentConversation } from '../../pure-interfaces/chatbox';
import * as SideChatboxActions from './pure-chatbox.action';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Injectable()
export class PureChatboxService {
  contacts$: Observable<any>;
  currentConversation$: Observable<any>;

  currentConversation: ICurrentConversation;

  // To simulate the other user send message back
  sendMessageBack$ = new Subject<Date>();

  constructor(private _store: Store<IAppState>, private _chatboxContainer: PureChatboxContainerService) {
    this.contacts$ = this._store.pipe(getContacts());
    this.currentConversation$ = this._store.pipe(getCurrentConversation());

    this.currentConversation$.subscribe(currentConversation => {
      this.currentConversation = currentConversation;
      if (this.inConversation) {
        this._chatboxContainer.open();
      }
    });

    this.sendMessageBack$.pipe(debounceTime(500), distinctUntilChanged()).subscribe(() => {
      this.sendMessageBack();
    });
  }

  public get inConversation() {
    return this.currentConversation.contactInfo !== undefined;
  }

  public get conversationContact() {
    return this.currentConversation.contactInfo ? this.currentConversation.contactInfo.id : '';
  }

  /**
   * Dispatch Functions
   */

  public getContacts() {
    this._store.dispatch(new SideChatboxActions.GetContacts());
  }

  public chooseContact(contactId: number) {
    this._store.dispatch(new SideChatboxActions.GetConversation(contactId));
  }

  public clearConversation() {
    this._store.dispatch(new SideChatboxActions.ClearConversation());
  }

  public sendMessage(message) {
    this._store.dispatch(new SideChatboxActions.SendMessage({
      sender: 0, // Me
      message,
      createAt: new Date()
    }));

    // To simulate the other user send message back
    this.sendMessageBack$.next(new Date());
  }

  private sendMessageBack() {
    this._store.dispatch(new SideChatboxActions.SendMessage({
      sender: this.currentConversation.contactInfo.id,
      message: 'I am Grootttt',
      createAt: new Date()
    }));
  }
}
