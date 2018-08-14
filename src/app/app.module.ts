import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// Angular Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';

// Angular Material
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

// Pure Components
import { HomeComponent } from './home/home.component';
import { PureSidenav} from './shared/pure-sidenav/pure-sidenav.component';

// Pure Services 
import { PureSidenavService } from './shared/pure-sidenav/pure-sidenav.service';

@NgModule({
  declarations: [
    AppComponent,

    // Pure Components
    HomeComponent,
    PureSidenav,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

    // Angular Flex Layout
    FlexLayoutModule,

    // Angular Material
    BrowserAnimationsModule,

    MatAutocompleteModule,
    MatBadgeModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatOptionModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  providers: [PureSidenavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
