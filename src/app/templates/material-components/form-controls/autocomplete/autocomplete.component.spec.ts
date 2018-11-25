import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from 'src/app/templates/shared/shared.module';
import { AutocompleteComponent } from './autocomplete.component';
import { SimpleAutocompleteExample } from './simple-autocomplete-example/simple-autocomplete-example';
import { DisplayValueAutocompleteExample } from './display-value-autocomplete-example/display-value-autocomplete-example';
import { FilterAutocompleteExample } from './filter-autocomplete-example/filter-autocomplete-example';
import { OptionGroupsAutocompleteExample } from './option-groups-autocomplete-example/option-groups-autocomplete-example';
import { FocusFirstOptionAutocompleteExample } from './focus-first-option-autocomplete-example/focus-first-option-autocomplete-example';

import { PureSettingsService } from 'src/app/core/pure-services/pure-settings.service';
import { PureSettingsStorageService } from 'src/app/core/pure-services/pure-settings.storage';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';

describe('AutocompleteComponent', () => {
  let component: AutocompleteComponent;
  let fixture: ComponentFixture<AutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AutocompleteComponent,
        // Autocomplete Examples
        SimpleAutocompleteExample,
        DisplayValueAutocompleteExample,
        FilterAutocompleteExample,
        OptionGroupsAutocompleteExample,
        FocusFirstOptionAutocompleteExample
      ],
      imports: [
        BrowserAnimationsModule,
        SharedModule,
        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
      ],
      providers: [ PureSettingsService, PureSettingsStorageService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
