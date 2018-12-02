import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionGroupsAutocompleteExample } from './option-groups-autocomplete-example';
import { SharedModule } from 'src/app/templates/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('OptionGroupsAutocompleteExample', () => {
  let component: OptionGroupsAutocompleteExample;
  let fixture: ComponentFixture<OptionGroupsAutocompleteExample>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OptionGroupsAutocompleteExample ],
      imports: [
        BrowserAnimationsModule,
        SharedModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OptionGroupsAutocompleteExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
