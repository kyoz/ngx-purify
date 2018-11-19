import { Observable } from 'rxjs';

export type AppSelector<T, V> = (observable$: Observable<T>) => Observable<V>;
