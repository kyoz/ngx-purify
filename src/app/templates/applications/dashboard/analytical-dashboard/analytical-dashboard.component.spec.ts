import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyticalDashboardComponent } from './analytical-dashboard.component';

describe('AnalyticalDashboardComponent', () => {
  let component: AnalyticalDashboardComponent;
  let fixture: ComponentFixture<AnalyticalDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyticalDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyticalDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
