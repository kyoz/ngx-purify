import { Action, State, StateContext, Selector } from '@ngxs/store';
import { ImmutableSelector, ImmutableContext } from '@ngxs-labs/immer-adapter';
import { ChatboxContact, ChatboxMessage, CurrentConversation } from '../../core/pure-models/chatbox';
import { PureMockApiService } from '../../core/pure-mock-api/pure-mock-api.service';
import { GetContacts, GetConversation, SendMessage } from './chatbox.actions';

export class PureSideChatboxStateModel {
  contacts: ChatboxContact[];
  currentContact: ChatboxContact;
  currentMessages: ChatboxMessage[];
}

@State<PureSideChatboxStateModel>({
  name: 'pureSideChatbox',
  defaults: {
    contacts: [],
    currentContact: undefined,
    currentMessages: []
  }
})
export class PureSideChatboxState {
  constructor(private _mockApi: PureMockApiService) { }

  @Selector()
  @ImmutableSelector()
  static getContacts(state: PureSideChatboxStateModel) {
    return state.contacts;
  }

  @Selector()
  @ImmutableSelector()
  static getCurrentContact(state: PureSideChatboxStateModel) {
    return state.currentContact;
  }

  @Selector()
  @ImmutableSelector()
  static getCurrentMessages(state: PureSideChatboxStateModel) {
    return state.currentMessages;
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
    this._mockApi.chatbox.getConversationByContact(contactId).subscribe((conversation: CurrentConversation) => {
      setState((state: PureSideChatboxStateModel) => {
        state.currentContact = conversation.contact;
        state.currentMessages = conversation.messages;
        return state;
      });
    });
  }

  @ImmutableContext()
  @Action(SendMessage)
  sendMessage({ getState, setState }: StateContext<PureSideChatboxStateModel>, { chatboxMessage }: SendMessage) {
    const { sender, message, createAt } = chatboxMessage;
    const owner = getState().currentContact.id;
    const currentMessages = [...getState().currentMessages];

    this._mockApi.chatbox.sendMessage(owner, sender, message, createAt).subscribe((newMessage: ChatboxMessage) => {
      setState((state: PureSideChatboxStateModel) => {
        currentMessages.push(newMessage);

        state.currentMessages = currentMessages;
        return state;
      });
    });
  }
}

