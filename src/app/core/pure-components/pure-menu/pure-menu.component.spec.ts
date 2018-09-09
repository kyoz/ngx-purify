import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PureMenu } from './pure-menu.component';

describe('PureMenuComponent', () => {
  let component: PureMenu;
  let fixture: ComponentFixture<PureMenu>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PureMenu ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureMenu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
