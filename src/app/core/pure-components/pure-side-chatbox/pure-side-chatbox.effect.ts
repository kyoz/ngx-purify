import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import * as SideChatBoxActions from './pure-side-chatbox.action';
import { PureMockApiService } from '../../pure-mock-api/pure-mock-api.service';

@Injectable()
export class PureSideChatboxEffects {

  @Effect()
  loadList$ = this._actions$
    .ofType(SideChatBoxActions.PURE_SIDE_CHATBOX_GET_CONTACTS)
    .pipe(flatMap(() => of(new SideChatBoxActions.FetchContacts(this._mockApi.chatboxContacts))));

  constructor(
    private _actions$: Actions,
    private _mockApi: PureMockApiService
  ) { }
}
