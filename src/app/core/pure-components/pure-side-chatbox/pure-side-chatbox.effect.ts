import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of, Observable } from 'rxjs';
import { map, flatMap, pluck } from 'rxjs/operators';
import * as SideChatBoxActions from './pure-side-chatbox.action';
import { PureMockApiService } from '../../pure-mock-api/pure-mock-api.service';
import { IChatboxContact, IChatBoxMessage, ICurrentConversation } from '../../pure-mock-api/interface/chatbox';

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
    .ofType(SideChatBoxActions.PURE_SIDE_CHATBOX_GET_CONVERSATION)
    .pipe(
      pluck('payload'),
      flatMap((contactId): Observable<ICurrentConversation> => {
        return this._mockApi.chatbox.getConversationByContact(contactId);
      }),
      map((conversation: IChatBoxMessage[]) => new SideChatBoxActions.FetchConversation(conversation))
    );

  constructor(
    private _actions$: Actions,
    private _mockApi: PureMockApiService
  ) { }
}
