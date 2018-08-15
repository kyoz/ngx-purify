import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PureSideMenuComponent } from './pure-side-menu.component';

describe('PureSideMenuComponent', () => {
  let component: PureSideMenuComponent;
  let fixture: ComponentFixture<PureSideMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PureSideMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
