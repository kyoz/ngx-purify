import { Action } from '@ngrx/store';

export const PURE_SIDE_CHATBOX_GET_CONTACTS = '[Side Chatbox] Get Contacts';
export const PURE_SIDE_CHATBOX_FETCH_CONTACTS = '[Side Chatbox] Fetch Contacts';

export class GetContacts implements Action {
  readonly type = PURE_SIDE_CHATBOX_GET_CONTACTS;
}

export class FetchContacts implements Action {
  readonly type = PURE_SIDE_CHATBOX_FETCH_CONTACTS;
  constructor(public payload: any) {}
}

export type All = GetContacts | FetchContacts;
