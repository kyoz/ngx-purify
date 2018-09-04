import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticalDashboard } from './analytical-dashboard.component';

describe('AnalyticalDashboard', () => {
  let component: AnalyticalDashboard;
  let fixture: ComponentFixture<AnalyticalDashboard>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AnalyticalDashboard]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticalDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
