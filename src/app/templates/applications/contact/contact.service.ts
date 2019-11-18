import { Injectable } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { GetContacts } from '../../../stores/contact/contact.actions';
import { ContactAppState } from '../../../stores/contact/contact.state';

@Injectable()
export class ContactAppService {
  @Select(ContactAppState.getContacts) contacts$: Observable<Contact[]>;

  constructor(private _store: Store) { }

  public getContacts(type) {
    this._store.dispatch(new GetContacts(type));
  }
}
