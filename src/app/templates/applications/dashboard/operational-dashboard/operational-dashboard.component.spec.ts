import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationalDashboard } from './operational-dashboard.component';

describe('OperationalDashboard', () => {
  let component: OperationalDashboard;
  let fixture: ComponentFixture<OperationalDashboard>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OperationalDashboard]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationalDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
