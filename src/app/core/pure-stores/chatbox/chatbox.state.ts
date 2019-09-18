import { Store, Action, State, StateContext, Selector } from '@ngxs/store';
import { ImmutableSelector, ImmutableContext } from '@ngxs-labs/immer-adapter';
import { ChatboxContact, ChatboxMessage, CurrentConversation } from '../../../core/pure-models/chatbox';
import { PureMockApiService } from '../../pure-mock-api/pure-mock-api.service';
import {
  GetContacts,
  GetConversation,
  SendMessage
} from './chatbox.actions';

export class PureSideChatboxStateModel {
  contacts: ChatboxContact[];
  currentConversation: CurrentConversation;
}

@State<PureSideChatboxStateModel>({
  name: 'pureSideChatbox',
  defaults: {
    contacts: [],
    currentConversation: {
      contactInfo: undefined,
      messages: []
    }
  }
})
export class PureSideChatboxState {
  constructor(
    private _store: Store,
    private _mockApi: PureMockApiService
  ) { }

  @Selector()
  @ImmutableSelector()
  static getContacts(state: PureSideChatboxStateModel) {
    return state.contacts;
  }

  @Selector()
  @ImmutableSelector()
  static getCurrentConversation(state: PureSideChatboxStateModel) {
    return state.currentConversation;
  }

  @Action(GetContacts)
  @ImmutableContext()
  getContacts({ setState }: StateContext<PureSideChatboxStateModel>) {
    this._mockApi.chatbox.getChatboxContacts().subscribe((contacts: ChatboxContact[]) => {
      setState((state: PureSideChatboxStateModel) => {
        state.contacts = contacts;
        return state;
      });
    });
  }

  @Action(GetConversation)
  @ImmutableContext()
  getConversation({ setState }: StateContext<PureSideChatboxStateModel>, { contactId }: GetConversation) {
    this._mockApi.chatbox.getConversationByContact(contactId).subscribe((currentConversation: CurrentConversation) => {
      setState((state: PureSideChatboxStateModel) => {
        state.currentConversation = currentConversation;
        return state;
      });
    });
  }

  @ImmutableContext()
  @Action(SendMessage)
  sendMessage({ getState, setState }: StateContext<PureSideChatboxStateModel>, { message }: SendMessage) {
    const { sender, message, createAt } = message;
    const owner = getState().currentConversation.contactInfo.id;
    const currentMessages = getState().currentConversation.messages;

    this._mockApi.chatbox.sendMessage(owner, sender, message, createAt).subscribe(() => {
      this._store.dispatch(new GetConversation(owner));
    });

  }
}

