import { Injectable } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { ContactAppState } from '../../../stores/contact/contact.state';
import {
  GetContacts,
  CreateContact,
  UpdateContact,
  RemoveContact,
  RemoveContacts,
  FavoriteContact,
  UnfavoriteContact
} from '../../../stores/contact/contact.actions';
import { Contact } from '../../../shared/models/contact.model';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class ContactAppService {
  @Select(ContactAppState.getContacts) contacts$: Observable<Contact[]>;
  @Select(ContactAppState.getNotify) notify$: Observable<any>;

  dataType$ = new BehaviorSubject<'all' | 'favorite' | 'frequently'>('all');

  constructor(private _store: Store) {
    this.dataType$.subscribe(dataType => {
      this.getContacts(dataType);
    });
  }

  public getContacts(type: 'all' | 'favorite' | 'frequently') {
    this._store.dispatch(new GetContacts(type));
  }

  public createContact(contact: Contact) {
    this._store.dispatch(new CreateContact(contact));
  }

  public updateContact(contact: Contact) {
    this._store.dispatch(new UpdateContact(contact));
  }

  public removeContact(contactId: number) {
    this._store.dispatch(new RemoveContact(contactId));
  }

  public removeContacts(contacts: Contact[]) {
    this._store.dispatch(new RemoveContacts(contacts));
  }

  public favoriteContact(contactId: number) {
    this._store.dispatch(new FavoriteContact(contactId));
  }

  public unfavoriteContact(contactId: number) {
    this._store.dispatch(new UnfavoriteContact(contactId));
  }
}
