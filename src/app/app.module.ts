import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

// Angular Flex Layout
import { FlexLayoutModule } from '@angular/flex-layout';

// Angular Material Modules
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

// Pure Core Components
import { PureContainer} from './core/pure-container/pure-container.component';
import { PureSideMenu } from './core/pure-side-menu/pure-side-menu.component';

// Pure Core Services 
import { PureSideMenuService } from './core/pure-side-menu/pure-side-menu.service';

// Pure Components

@NgModule({
  declarations: [
    AppComponent,

    // Pure Core Components
    PureContainer,
    PureSideMenu,

    // Pure Components
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

    // Angular Flex Layout
    FlexLayoutModule,

    // Angular Material Modules
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
  providers: [
    // Pure Core Services
    PureSideMenuService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
