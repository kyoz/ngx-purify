import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PureSettings } from './pure-settings.component';

describe('PureSettings', () => {
  let component: PureSettings;
  let fixture: ComponentFixture<PureSettings>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PureSettings ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureSettings);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
