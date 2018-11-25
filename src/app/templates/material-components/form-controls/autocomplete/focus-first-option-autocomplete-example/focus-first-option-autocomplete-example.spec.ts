import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusFirstOptionAutocompleteExample } from './focus-first-option-autocomplete-example';
import { SharedModule } from 'src/app/templates/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FocusFirstOptionAutocompleteExample', () => {
  let component: FocusFirstOptionAutocompleteExample;
  let fixture: ComponentFixture<FocusFirstOptionAutocompleteExample>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusFirstOptionAutocompleteExample ],
      imports: [
        BrowserAnimationsModule,
        SharedModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusFirstOptionAutocompleteExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
