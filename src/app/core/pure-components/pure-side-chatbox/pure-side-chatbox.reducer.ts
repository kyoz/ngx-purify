import * as SideChatBoxActions from './pure-side-chatbox.action';
import { Map } from 'immutable';
import { IPureSideChatBoxState } from './pure-side-chatbox.state';

export type SideChatBoxActions = SideChatBoxActions.All;

const defaultState = Map({
  contacts: [],
  currentConversation: {
    contactInfo: undefined,
    messages: []
  } 
});

export function sideChatBoxReducer(state: IPureSideChatBoxState = defaultState, action: SideChatBoxActions) {
  switch(action.type) {
    case SideChatBoxActions.PURE_SIDE_CHATBOX_FETCH_CONTACTS:
      return state.set('contacts', action.payload);
    case SideChatBoxActions.PURE_SIDE_CHATBOX_FETCH_CONVERSATION:
      console.log(action.payload);
      return state.set('currentConversation', action.payload);
    case SideChatBoxActions.PURE_SIDE_CHATBOX_CLEAR_CONVERSATION:
      return state.set('currentConversation', {
        contactInfo: undefined,
        messages: []
      });
    default:
      return state;
  }
}