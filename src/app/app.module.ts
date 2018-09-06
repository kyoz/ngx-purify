import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// App Router
import { AppRoutingModule } from './app.routing';

// Pure Modules
import { PureCoreModule } from './core/core.module';
import { PureSharedModule } from './shared/shared.module';

// Components
import { AppComponent } from './app.component';
import { MainContainer } from './containers/main-container/main-container.component';
import { MinimalContainer } from './containers/minimal-container/minimal-container.component';

// Ngrx Redux Modules
import { EffectsModule } from '@ngrx/effects';
import { AppStateModule } from './app-state.module';
import { PureSideChatboxEffects } from './core/pure-components/pure-side-chatbox/pure-side-chatbox.effect';


@NgModule({
  declarations: [
    AppComponent,
    MainContainer,
    MinimalContainer
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    // App Router 
    AppRoutingModule,

    // Pure Modules
    PureCoreModule,
    PureSharedModule,

    // Ngrx Redux Modules
    AppStateModule,
    EffectsModule.forRoot([
      PureSideChatboxEffects
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
