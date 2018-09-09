import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PureMenuItemComponent } from './pure-menu-item.component';

describe('PureMenuItemComponent', () => {
  let component: PureMenuItemComponent;
  let fixture: ComponentFixture<PureMenuItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PureMenuItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
