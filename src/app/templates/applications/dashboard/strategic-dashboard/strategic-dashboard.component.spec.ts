import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategicDashboard } from './strategic-dashboard.component';

describe('StrategicDashboard', () => {
  let component: StrategicDashboard;
  let fixture: ComponentFixture<StrategicDashboard>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StrategicDashboard]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategicDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
