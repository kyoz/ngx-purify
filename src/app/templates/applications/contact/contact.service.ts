import { Injectable } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { ContactAppState } from '../../../stores/contact/contact.state';
import { GetContacts } from '../../../stores/contact/contact.actions';
import { Contact } from '../../../shared/models/contact.model';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class ContactAppService {
  @Select(ContactAppState.getContacts) contacts$: Observable<Contact[]>;

  dataType$ = new BehaviorSubject<'all' | 'favorite' | 'frequently'>('all');

  constructor(private _store: Store) {
    this.dataType$.subscribe(dataType => {
      this.getContacts(dataType);
    });
  }

  public getContacts(type: 'all' | 'favorite' | 'frequently') {
    this._store.dispatch(new GetContacts(type));
  }
}
