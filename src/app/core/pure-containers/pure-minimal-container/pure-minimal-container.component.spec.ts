import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PureMinimalContainer } from './pure-minimal-container.component';

describe('PureMinimalContainer', () => {
  let component: PureMinimalContainer;
  let fixture: ComponentFixture<PureMinimalContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PureMinimalContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureMinimalContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
