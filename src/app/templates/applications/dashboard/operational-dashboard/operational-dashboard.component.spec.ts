import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationalDashboardComponent } from './operational-dashboard.component';

describe('OperationalDashboardComponent', () => {
  let component: OperationalDashboardComponent;
  let fixture: ComponentFixture<OperationalDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OperationalDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationalDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
