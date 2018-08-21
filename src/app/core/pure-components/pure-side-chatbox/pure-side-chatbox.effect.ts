import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';
import * as SideChatBoxActions from './pure-side-chatbox.action';
import { PureMockApiService } from '../../pure-mock-api/pure-mock-api.service';
import { IChatboxContact, IChatBoxMessage } from '../../pure-mock-api/interface/chatbox';

@Injectable()
export class PureSideChatboxEffects {

  @Effect()
  getContacts$ = this._actions$
    .ofType(SideChatBoxActions.PURE_SIDE_CHATBOX_GET_CONTACTS)
    .pipe(
      flatMap(() => this._mockApi.chatbox.getChatboxContacts()),
      map((contacts: IChatboxContact[]) => new SideChatBoxActions.FetchContacts(contacts))
    );

  @Effect()
  getConversation$ = this._actions$
    .ofType(SideChatBoxActions.PURE_SIDE_CHATBOX_GET_CONTACT_MESSAGES)
    .pipe(
      map(action => action['payload']),
      flatMap((contactId) => this._mockApi.chatbox.getChatboxContactMessages(contactId)),
      map((messages: IChatBoxMessage[]) => new SideChatBoxActions.FetchContactMessage(messages))
    );

  constructor(
    private _actions$: Actions,
    private _mockApi: PureMockApiService
  ) { }
}
