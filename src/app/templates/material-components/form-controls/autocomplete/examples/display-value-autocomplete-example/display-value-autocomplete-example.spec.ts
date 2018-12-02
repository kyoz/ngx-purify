import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayValueAutocompleteExample } from './display-value-autocomplete-example';
import { SharedModule } from 'src/app/templates/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DisplayValueAutocompleteExample', () => {
  let component: DisplayValueAutocompleteExample;
  let fixture: ComponentFixture<DisplayValueAutocompleteExample>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayValueAutocompleteExample ],
      imports: [
        BrowserAnimationsModule,
        SharedModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayValueAutocompleteExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
