import * as SideChatBoxActions from './pure-side-chatbox.action';
import { Map } from 'immutable';
import { IPureSideChatBoxState } from './pure-side-chatbox.state';

export type SideChatBoxActions = SideChatBoxActions.All;

const defaultState = Map({
  contacts: [],
  currentChat: {
    contact: {},
    messages: []
  }
});

export function sideChatBoxReducer(state: IPureSideChatBoxState = defaultState, action: SideChatBoxActions) {
  switch(action.type) {
    case SideChatBoxActions.PURE_SIDE_CHATBOX_FETCH_CONTACTS:
      return state.set('contacts', action.payload);
    case SideChatBoxActions.PURE_SIDE_CHATBOX_FETCH_CONTACT_MESSAGES:
    console.log(action.payload)
      return state.set('currentChat', {
        contact: 1,
        messages: action.payload
      });
    default:
      return state;
  }
}