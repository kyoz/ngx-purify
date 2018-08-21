import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from '../../../types/app-state';
import { getContacts } from './pure-side-chatbox.selector';
import * as SideChatboxActions from './pure-side-chatbox.action';

@Injectable()
export class PureSideChatboxService {
  contacts$: Observable<any>;

  constructor(private _store: Store<IAppState>) {
    this.contacts$ = this._store.pipe(getContacts());
  }

  public getContacts() {
    this._store.dispatch(new SideChatboxActions.GetContacts());
  }

  public chooseContact(contactId: number) {
    this._store.dispatch(new SideChatboxActions.GetContactMessage(contactId));
  }
}