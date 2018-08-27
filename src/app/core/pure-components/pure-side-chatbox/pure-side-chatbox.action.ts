import { Action } from '@ngrx/store';
import { IChatboxContact, IChatBoxMessage } from '../../pure-mock-api/interface/chatbox';

export const PURE_SIDE_CHATBOX_GET_CONTACTS = '[Side Chatbox] Get Contacts';
export const PURE_SIDE_CHATBOX_FETCH_CONTACTS = '[Side Chatbox] Fetch Contacts';
export const PURE_SIDE_CHATBOX_GET_CONVERSATION = '[Side Chatbox] Get Conversation';
export const PURE_SIDE_CHATBOX_FETCH_CONVERSATION = '[Side Chatbox] Fetch Conversation';
export const PURE_SIDE_CHATBOX_CLEAR_CONVERSATION = '[Side Chatbox] Clear Conversation';
export const PURE_SIDE_CHATBOX_SEND_MESSAGE = '[Side Chatbox] Send Message';

export class GetContacts implements Action {
  readonly type = PURE_SIDE_CHATBOX_GET_CONTACTS;
}

export class FetchContacts implements Action {
  readonly type = PURE_SIDE_CHATBOX_FETCH_CONTACTS;
  constructor(public payload: IChatboxContact[]) {}
}

export class GetConversation implements Action {
  readonly type = PURE_SIDE_CHATBOX_GET_CONVERSATION;
  constructor(public payload: number) {}
}

export class FetchConversation implements Action {
  readonly type = PURE_SIDE_CHATBOX_FETCH_CONVERSATION;
  constructor(public payload: IChatBoxMessage[]) {}
}

export class ClearConversation implements Action {
  readonly type = PURE_SIDE_CHATBOX_CLEAR_CONVERSATION;
}

export class SendMessage implements Action {
  readonly type = PURE_SIDE_CHATBOX_SEND_MESSAGE;
  constructor(public payload: IChatBoxMessage) {}
}

export type All =
  GetContacts |
  FetchContacts |
  GetConversation |
  FetchConversation |
  ClearConversation |
  SendMessage;
