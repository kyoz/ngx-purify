import { Store, Action, State, StateContext, Selector } from '@ngxs/store';
import { ImmutableSelector, ImmutableContext } from '@ngxs-labs/immer-adapter';
import { PureMockApiService } from '../../core/pure-mock-api/pure-mock-api.service';
import { Contact } from '../../shared/models/contact.model';
import { GetContacts, RemoveContact, RemoveContacts, FavoriteContact, UnfavoriteContact } from './contact.actions';

export class ContactAppStateModel {
  currentDataType: 'all' | 'favorite' | 'frequently';
  contacts: Contact[];
}

@State<ContactAppStateModel>({
  name: 'contactApp',
  defaults: {
    currentDataType: 'all',
    contacts: []
  }
})
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
        break;

      case 'frequently':
        this._mockApi.contact.getFrequentlyContacts().subscribe((contacts: Contact[]) => {
          setState((state: ContactAppStateModel) => {
            state.contacts = contacts;
            state.currentDataType = 'frequently';
            return state;
          });
        });
        break;

      default:
        this._mockApi.contact.getContacts().subscribe((contacts: Contact[]) => {
          setState((state: ContactAppStateModel) => {
            state.contacts = contacts;
            state.currentDataType = 'all';
            return state;
          });
        });
    }
  }

  @ImmutableContext()
  @Action(RemoveContact)
  removeContact({ getState }: StateContext<ContactAppStateModel>, { contactId }: RemoveContact) {
    this._mockApi.contact.removeContact(contactId).subscribe(() => {
      // Reload data
      this._store.dispatch(new GetContacts(getState().currentDataType));
    });
  }

  @ImmutableContext()
  @Action(RemoveContacts)
  removeContacts({ getState }: StateContext<ContactAppStateModel>, { contacts }: RemoveContacts) {
    this._mockApi.contact.removeContacts(contacts).subscribe(() => {
      // Reload data
      this._store.dispatch(new GetContacts(getState().currentDataType));
    });
  }

  @ImmutableContext()
  @Action(FavoriteContact)
  favoriteContact({ getState }: StateContext<ContactAppStateModel>, { contactId }: FavoriteContact) {
    this._mockApi.contact.favoriteContact(contactId).subscribe(() => {
      // Reload data
      this._store.dispatch(new GetContacts(getState().currentDataType));
    });
  }

  @ImmutableContext()
  @Action(UnfavoriteContact)
  unfavoriteContact({ getState }: StateContext<ContactAppStateModel>, { contactId }: UnfavoriteContact) {
    this._mockApi.contact.unfavoriteContact(contactId).subscribe(() => {
      // Reload data
      this._store.dispatch(new GetContacts(getState().currentDataType));
    });
  }
}

