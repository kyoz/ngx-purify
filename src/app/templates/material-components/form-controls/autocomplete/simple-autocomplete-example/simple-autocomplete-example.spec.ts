import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleAutocompleteExample } from './simple-autocomplete-example';
import { SharedModule } from 'src/app/templates/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SimpleAutocompleteExample', () => {
  let component: SimpleAutocompleteExample;
  let fixture: ComponentFixture<SimpleAutocompleteExample>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleAutocompleteExample ],
      imports: [
        BrowserAnimationsModule,
        SharedModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleAutocompleteExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
