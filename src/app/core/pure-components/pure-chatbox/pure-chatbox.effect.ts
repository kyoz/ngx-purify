import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { map, flatMap, pluck } from 'rxjs/operators';
import { PureMockApiService } from '../../pure-mock-api/pure-mock-api.service';
import { IChatboxContact, ICurrentConversation } from '../../pure-interfaces/chatbox';
import * as SideChatBoxActions from './pure-chatbox.action';

@Injectable()
export class PureChatboxEffects {

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
      map((conversation: ICurrentConversation) => new SideChatBoxActions.FetchConversation(conversation))
    );

  constructor(
    private _actions$: Actions,
    private _mockApi: PureMockApiService
  ) { }
}
