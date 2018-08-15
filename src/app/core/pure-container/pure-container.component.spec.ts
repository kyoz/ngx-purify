import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PureContainer } from './pure-container.component';

describe('PureContainer', () => {
  let component: PureContainer;
  let fixture: ComponentFixture<PureContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PureContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
