import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PureToolbar } from './pure-toolbar.component';

describe('PureToolbar', () => {
  let component: PureToolbar;
  let fixture: ComponentFixture<PureToolbar>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PureToolbar ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureToolbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
