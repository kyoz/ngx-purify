import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatToolbarModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatOptionModule,
  MatTooltipModule
} from '@angular/material';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HomeComponent
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,

        // Angular Material
        BrowserAnimationsModule,
        MatAutocompleteModule,
        MatBadgeModule,
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatToolbarModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatOptionModule,
        MatTooltipModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
