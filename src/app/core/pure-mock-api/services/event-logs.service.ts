import { Injectable } from '@angular/core';
import { EventLog, EventLogType } from '../../../shared/models/event-log.model';
import { Observable } from 'rxjs';
import { EVENT_LOGS, EVENT_LOG_TYPES } from '../data/event-logs';

@Injectable()
export class EventLogMockApiService {

  // Assume this data that you got from server
  private eventLogs: EventLog[] = Array.from(EVENT_LOGS);
  private eventLogTypes: EventLogType[] = Array.from(EVENT_LOG_TYPES);

  public getEventLogTypes(): Observable<EventLogType[]> {
    return new Observable(observer => {
      observer.next(this.eventLogTypes);
      observer.complete();
    });
  }

  public search(type: string, date: Date): Observable<EventLog[]> {
    return new Observable(observer => {
      observer.next(this.eventLogs);
      observer.complete();
    });
  }
}
