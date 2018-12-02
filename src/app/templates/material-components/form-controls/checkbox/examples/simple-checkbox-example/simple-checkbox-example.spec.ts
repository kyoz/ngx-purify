import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCheckboxExample } from './simple-checkbox-example';
import { SharedModule } from '../../../../../shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SimpleCheckboxExample', () => {
  let component: SimpleCheckboxExample;
  let fixture: ComponentFixture<SimpleCheckboxExample>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleCheckboxExample ],
      imports: [
        BrowserAnimationsModule,
        SharedModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleCheckboxExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
