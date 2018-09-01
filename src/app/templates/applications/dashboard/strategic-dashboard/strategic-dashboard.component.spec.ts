import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategicDashboardComponent } from './strategic-dashboard.component';

describe('StrategicDashboardComponent', () => {
  let component: StrategicDashboardComponent;
  let fixture: ComponentFixture<StrategicDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrategicDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategicDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
