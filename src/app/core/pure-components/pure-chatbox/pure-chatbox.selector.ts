import { AppSelector } from '../../../types/app-selector';
import { IAppState } from '../../../types/app-state';
import { IPureChatboxState } from './pure-chatbox.state';
import { map, distinctUntilChanged } from 'rxjs/operators';

export function getContacts(): AppSelector<IAppState, IPureChatboxState> {
  return state$ => state$.pipe(
    map(state => state.sideChatbox.get('contacts')),
    distinctUntilChanged());
}

export function getCurrentConversation(): AppSelector<IAppState, IPureChatboxState> {
  return state$ => state$.pipe(
    map(state => state.sideChatbox.get('currentConversation')),
    distinctUntilChanged());
}
