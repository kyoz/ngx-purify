import * as SideChatBoxActions from './pure-chatbox.action';
import { Map } from 'immutable';
import { IPureChatboxState } from './pure-chatbox.state';
import { getCurrentConversation } from './pure-chatbox.selector';

export type PureChatBoxActions = SideChatBoxActions.All;

const defaultState = Map({
  contacts: [],
  currentConversation: {
    contactInfo: undefined,
    messages: []
  } 
});

export function pureChatboxReducer(state: IPureChatboxState = defaultState, action: PureChatBoxActions) {
  switch(action.type) {
    case SideChatBoxActions.PURE_SIDE_CHATBOX_FETCH_CONTACTS:
      return state.set('contacts', action.payload);
    case SideChatBoxActions.PURE_SIDE_CHATBOX_FETCH_CONVERSATION:
      return state.set('currentConversation', action.payload);
    case SideChatBoxActions.PURE_SIDE_CHATBOX_CLEAR_CONVERSATION:
      return state.set('currentConversation', {
        contactInfo: undefined,
        messages: []
      });
    case SideChatBoxActions.PURE_SIDE_CHATBOX_SEND_MESSAGE:
      const currentConversation = state.get('currentConversation');
      currentConversation.messages.push({...action.payload});
      return state.set('currentConversation', {...currentConversation});

    default:
      return state;
  }
}
