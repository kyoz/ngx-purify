import { Action } from '@ngrx/store';
import { IChatboxContact, IChatBoxMessage } from '../../pure-mock-api/interface/chatbox';

export const PURE_SIDE_CHATBOX_GET_CONTACTS = '[Side Chatbox] Get Contacts';
export const PURE_SIDE_CHATBOX_FETCH_CONTACTS = '[Side Chatbox] Fetch Contacts';
export const PURE_SIDE_CHATBOX_GET_CONTACT_MESSAGES = '[Side Chatbox] Get Contact Messages';
export const PURE_SIDE_CHATBOX_FETCH_CONTACT_MESSAGES= '[Side Chatbox] Fetch Contact Messages';

export class GetContacts implements Action {
  readonly type = PURE_SIDE_CHATBOX_GET_CONTACTS;
}

export class FetchContacts implements Action {
  readonly type = PURE_SIDE_CHATBOX_FETCH_CONTACTS;
  constructor(public payload: IChatboxContact[]) {}
}

export class GetContactMessage implements Action {
  readonly type = PURE_SIDE_CHATBOX_GET_CONTACT_MESSAGES;
  constructor(public payload: number) {}
}

export class FetchContactMessage implements Action {
  readonly type = PURE_SIDE_CHATBOX_FETCH_CONTACT_MESSAGES;
  constructor(public payload: IChatBoxMessage[]) {}
}

export type All = GetContacts | FetchContacts | GetContactMessage | FetchContactMessage;
