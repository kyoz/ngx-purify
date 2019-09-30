import { Action, State, StateContext, Selector } from '@ngxs/store';
import { ImmutableSelector, ImmutableContext } from '@ngxs-labs/immer-adapter';
import { PureMockApiService } from '../../core/pure-mock-api/pure-mock-api.service';
import { EventLog, EventLogType } from '../../shared/models/event-log.model';
import { Search, GetEventLogTypes } from './event-log.actions';

export class EventLogAppStateModel {
  eventLogTypes: EventLogType[];
  eventLogs: EventLog[];
}

@State<EventLogAppStateModel>({
  name: 'eventLogApp',
  defaults: {
    eventLogTypes: [],
    eventLogs: []
  }
})
export class EventLogAppState {
  constructor(private _mockApi: PureMockApiService) { }

  @Selector()
  @ImmutableSelector()
  static getEventLogTypes(state: EventLogAppStateModel) {
    return state.eventLogTypes;
  }

  @Selector()
  @ImmutableSelector()
  static getEventLogs(state: EventLogAppStateModel) {
    return state.eventLogs;
  }

  @ImmutableContext()
  @Action(GetEventLogTypes)
  getEventLogTypes({ setState }: StateContext<EventLogAppStateModel>) {
    this._mockApi.eventLog.getEventLogTypes().subscribe((eventLogTypes: EventLogType[]) => {
      setState((state: EventLogAppStateModel) => {
        state.eventLogTypes = eventLogTypes;
        return state;
      });
    });
  }

  @ImmutableContext()
  @Action(Search)
  search({ setState }: StateContext<EventLogAppStateModel>, { type, timestamp }: Search) {
    this._mockApi.eventLog.search(type, timestamp).subscribe((eventLogs: EventLog[]) => {
      setState((state: EventLogAppStateModel) => {
        state.eventLogs = eventLogs;
        return state;
      });
    });
  }
}

