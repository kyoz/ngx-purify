import { Action } from '@ngrx/store';

export const SIDE_CHATBOX_GET_DATA = '[Side Chatbox] Get Data';
export const SIDE_CHATBOX_FETCH_DATA = '[Side Chatbox] Fetch Data';

export class getData implements Action {
  readonly type = SIDE_CHATBOX_GET_DATA;
}

export class fetchData implements Action {
  readonly type = SIDE_CHATBOX_FETCH_DATA;
  constructor(public payload: any) {}
}

export type All = getData | fetchData;
