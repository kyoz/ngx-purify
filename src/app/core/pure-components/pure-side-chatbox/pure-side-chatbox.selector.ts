import { AppSelector } from '../../../types/app-selector';
import { IAppState } from '../../../types/app-state';
import { IPureSideChatBoxState } from './pure-side-chatbox.state';
import { map, distinctUntilChanged } from 'rxjs/operators';

export function getContacts(): AppSelector<IAppState, IPureSideChatBoxState> {
  return state$ => state$.pipe(
    map(state => state.sideChatbox.get('contacts')),
    distinctUntilChanged());
}
