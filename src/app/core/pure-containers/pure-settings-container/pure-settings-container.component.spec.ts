import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PureSettingsContainer } from './pure-settings-container.component';

describe('PureSettingsContainer', () => {
  let component: PureSettingsContainer;
  let fixture: ComponentFixture<PureSettingsContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PureSettingsContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureSettingsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
