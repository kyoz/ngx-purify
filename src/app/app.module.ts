import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

// Store Modules
import { NgxsModule } from '@ngxs/store';

// App Router
import { AppRoutingModule } from './app-routing.module';

// Pure Modules
import { PureCoreModule } from './core/core.module';

// Components
import { AppComponent } from './app.component';
import { MainContainer } from './containers/main-container/main-container.component';
import { MinimalContainer } from './containers/minimal-container/minimal-container.component';

// States
import { PureSideChatboxState } from './stores/chatbox/chatbox.state';
// Template App States
import { SearchAppState } from './stores/search/search.state';
import { EventLogAppState } from './stores/event-log/event-log.state';

@NgModule({
  declarations: [
    AppComponent,
    MainContainer,
    MinimalContainer
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // App Router
    AppRoutingModule,

    // Pure Modules
    PureCoreModule,

    // Store Modules
    NgxsModule.forRoot([
      PureSideChatboxState,

      // Template App States
      SearchAppState,
      EventLogAppState
    ], {
      developmentMode: !environment.production
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
