import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PureSideNotificationComponent } from './pure-side-notification.component';

describe('PureSideNotificationComponent', () => {
  let component: PureSideNotificationComponent;
  let fixture: ComponentFixture<PureSideNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PureSideNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureSideNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
