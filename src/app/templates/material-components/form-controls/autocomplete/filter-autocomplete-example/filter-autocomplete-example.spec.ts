import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterAutocompleteExample } from './filter-autocomplete-example';
import { SharedModule } from 'src/app/templates/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FilterAutocompleteExample', () => {
  let component: FilterAutocompleteExample;
  let fixture: ComponentFixture<FilterAutocompleteExample>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterAutocompleteExample ],
      imports: [
        BrowserAnimationsModule,
        SharedModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterAutocompleteExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
