import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from '../../../types/app-state';
import { getContacts, getCurrentConversation } from './pure-side-chatbox.selector';
import { PureChatboxContainerService } from '../../pure-containers/pure-chatbox-container/pure-chatbox-container.service';
import { ICurrentConversation } from '../../pure-mock-api/interface/chatbox';
import * as SideChatboxActions from './pure-side-chatbox.action';

@Injectable()
export class PureSideChatboxService {
  contacts$: Observable<any>;
  currentConversation$: Observable<any>;

  currentConversation: ICurrentConversation;

  constructor(private _store: Store<IAppState>, private _chatboxContainer: PureChatboxContainerService) {
    this.contacts$ = this._store.pipe(getContacts());
    this.currentConversation$ = this._store.pipe(getCurrentConversation());

    this.currentConversation$.subscribe(currentConversation => {
      this.currentConversation = currentConversation;
      if (this.inConversation) {
        this._chatboxContainer.open();
      }
    })
  }

  public get inConversation() {
    return this.currentConversation.contactInfo !== undefined;
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
}
