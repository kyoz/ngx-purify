import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Pure Components
import { PureContainer } from './core/pure-container/pure-container.component';
import { PureSideMenu } from './core/pure-side-menu/pure-side-menu.component';

// Pure Services
import { PureSideMenuService } from './core/pure-side-menu/pure-side-menu.service';

// Angular Material Modules
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

        // Pure Components
        PureContainer,
        PureSideMenu
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,

        // Angular Material Modules 
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
      ],
      providers: [
        PureSideMenuService
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
