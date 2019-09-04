import { Injectable } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable, Subject } from 'rxjs';
import { GetContacts, GetConversation, ClearConversation, SendMessage } from '../../pure-stores/chatbox/chatbox.actions';
import { PureSideChatboxState } from '../../pure-stores/chatbox/chatbox.state';
import { CurrentConversation } from '../../pure-models/chatbox';
import { PureChatboxContainerService } from '../../pure-containers/pure-chatbox-container/pure-chatbox-container.service';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Injectable()
export class PureChatboxService {
  @Select(PureSideChatboxState.getContacts) contacts$: Observable<any>;
  @Select(PureSideChatboxState.getCurrentConversation) currentConversation$: Observable<any>;

  currentConversation: CurrentConversation;

  // To simulate the other user send message back
  sendMessageBack$ = new Subject<Date>();

  constructor(private _store: Store, private _chatboxContainer: PureChatboxContainerService) {
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
    this._store.dispatch(new GetContacts());
  }

  public chooseContact(contactId: number) {
    this._store.dispatch(new GetConversation(contactId));
  }

  public clearConversation() {
    this._store.dispatch(new ClearConversation());
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
      sender: this.currentConversation.contactInfo.id,
      message: 'I am Grootttt',
      createAt: new Date()
    }));
  }
}
