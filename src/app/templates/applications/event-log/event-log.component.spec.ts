import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventLog} from './event-log.component';

describe('EventLog', () => {
  let component: EventLog;
  let fixture: ComponentFixture<EventLog>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventLog]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventLog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
