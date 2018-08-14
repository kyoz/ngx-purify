import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PureSidenavComponent } from './pure-sidenav.component';

describe('PureSidenavComponent', () => {
  let component: PureSidenavComponent;
  let fixture: ComponentFixture<PureSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PureSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
