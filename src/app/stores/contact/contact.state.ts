import { Injectable } from '@angular/core';
import { Store, Action, State, StateContext, Selector } from '@ngxs/store';
import { ImmutableSelector, ImmutableContext } from '@ngxs-labs/immer-adapter';
import { PureMockApiService } from '../../core/pure-mock-api/pure-mock-api.service';
import { Contact } from '../../shared/models/contact.model';
import {
  GetContacts,
  CreateContact,
  UpdateContact,
  RemoveContact,
  RemoveContacts,
  FavoriteContact,
  UnfavoriteContact,
  Notify
} from './contact.actions';

export class ContactAppStateModel {
  currentDataType: 'all' | 'favorite' | 'frequently';
  contacts: Contact[];
  notify: {
    message: string;
    timestamp: Date;
  };
}

@State<ContactAppStateModel>({
  name: 'contactApp',
  defaults: {
    currentDataType: 'all',
    contacts: [],
    notify: undefined
  }
})
@Injectable()
export class ContactAppState {
  constructor(
    private _store: Store,
    private _mockApi: PureMockApiService
  ) { }

  @Selector()
  @ImmutableSelector()
  static getContacts(state: ContactAppStateModel) {
    return state.contacts;
  }

  @Selector()
  @ImmutableSelector()
  static getNotify(state: ContactAppStateModel) {
    return state.notify;
  }

  @ImmutableContext()
  @Action(GetContacts)
  getContacts({ setState }: StateContext<ContactAppStateModel>, { type }: GetContacts) {
    switch (type) {
      case 'favorite':
        this._mockApi.contact.getFavoriteContacts().subscribe((contacts: Contact[]) => {
          setState((state: ContactAppStateModel) => {
            state.contacts = contacts;
            state.currentDataType = 'favorite';
            return state;
          });
        });
        this._store.dispatch(new Notify(''));
        break;

      case 'frequently':
        this._mockApi.contact.getFrequentlyContacts().subscribe((contacts: Contact[]) => {
          setState((state: ContactAppStateModel) => {
            state.contacts = contacts;
            state.currentDataType = 'frequently';
            return state;
          });
        });
        this._store.dispatch(new Notify(''));
        break;

      default:
        this._mockApi.contact.getContacts().subscribe((contacts: Contact[]) => {
          setState((state: ContactAppStateModel) => {
            state.contacts = contacts;
            state.currentDataType = 'all';
            return state;
          });
        });
        this._store.dispatch(new Notify(''));
    }
  }

  @ImmutableContext()
  @Action(CreateContact)
  createContact({ getState }: StateContext<ContactAppStateModel>, { contact }: CreateContact) {
    this._mockApi.contact.createContact(contact).subscribe(() => {
      // Reload data and send notify
      this._store.dispatch(new GetContacts(getState().currentDataType));
      this._store.dispatch(new Notify('Created contact'));
    });
  }

  @Action(UpdateContact)
  updateContact({ getState }: StateContext<ContactAppStateModel>, { contact }: UpdateContact) {
    this._mockApi.contact.updateContact(contact).subscribe(() => {
      // Reload data and send notify
      this._store.dispatch(new GetContacts(getState().currentDataType));
      this._store.dispatch(new Notify('Updated contact'));
    });
  }

  @ImmutableContext()
  @Action(RemoveContact)
  removeContact({ getState }: StateContext<ContactAppStateModel>, { contactId }: RemoveContact) {
    this._mockApi.contact.removeContact(contactId).subscribe(() => {
      // Reload data and send notify
      this._store.dispatch(new GetContacts(getState().currentDataType));
      this._store.dispatch(new Notify('Removed contact'));
    });
  }

  @ImmutableContext()
  @Action(RemoveContacts)
  removeContacts({ getState }: StateContext<ContactAppStateModel>, { contacts }: RemoveContacts) {
    this._mockApi.contact.removeContacts(contacts).subscribe(() => {
      // Reload data and send notify
      this._store.dispatch(new GetContacts(getState().currentDataType));
      this._store.dispatch(new Notify('Removed contacts'));
    });
  }

  @ImmutableContext()
  @Action(FavoriteContact)
  favoriteContact({ getState }: StateContext<ContactAppStateModel>, { contactId }: FavoriteContact) {
    this._mockApi.contact.favoriteContact(contactId).subscribe(() => {
      // Reload data and send notify
      this._store.dispatch(new GetContacts(getState().currentDataType));
      this._store.dispatch(new Notify('Favorite contact'));
    });
  }

  @ImmutableContext()
  @Action(UnfavoriteContact)
  unfavoriteContact({ getState }: StateContext<ContactAppStateModel>, { contactId }: UnfavoriteContact) {
    this._mockApi.contact.unfavoriteContact(contactId).subscribe(() => {
      // Reload data and send notify
      this._store.dispatch(new GetContacts(getState().currentDataType));
      this._store.dispatch(new Notify('Unfavorite contact'));
    });
  }

  @ImmutableContext()
  @Action(Notify)
  notify({ setState }: StateContext<ContactAppStateModel>, { message }: Notify) {
    setState((state: ContactAppStateModel) => {
      state.notify = {
        message,
        timestamp: new Date()
      };
      return state;
    });
  }
}

