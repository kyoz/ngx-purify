import { Action, State, StateContext, Selector } from '@ngxs/store';
import { ImmutableSelector, ImmutableContext } from '@ngxs-labs/immer-adapter';
import { PureMockApiService } from '../../core/pure-mock-api/pure-mock-api.service';
import { Contact } from '../../shared/models/contact.model';
import { GetContacts } from './contact.actions';

export class ContactAppStateModel {
  contacts: Contact[];
}

@State<ContactAppStateModel>({
  name: 'contactApp',
  defaults: {
    contacts: []
  }
})
export class ContactAppState {
  constructor(private _mockApi: PureMockApiService) { }

  @Selector()
  @ImmutableSelector()
  static getContacts(state: ContactAppStateModel) {
    return state.contacts;
  }

  @ImmutableContext()
  @Action(GetContacts)
  search({ setState }: StateContext<ContactAppStateModel>, { type }: GetContacts) {
    switch (type) {
      case 'favorite':
        this._mockApi.contact.getFavoriteContacts().subscribe((contacts: Contact[]) => {
          setState((state: ContactAppStateModel) => {
            state.contacts = contacts;
            return state;
          });
        });
        break;

      case 'frequently':
        this._mockApi.contact.getFrequentlyContact().subscribe((contacts: Contact[]) => {
          setState((state: ContactAppStateModel) => {
            state.contacts = contacts;
            return state;
          });
        });
        break;

      default:
        this._mockApi.contact.getContacts().subscribe((contacts: Contact[]) => {
          setState((state: ContactAppStateModel) => {
            state.contacts = contacts;
            return state;
          });
        });
    }

  }
}

