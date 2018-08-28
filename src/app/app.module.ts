import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// App Router
import { AppRoutingModule } from './app.routing';

// Pure Modules
import { PureCoreModule } from './core/core.module';
import { PureSharedModule } from './shared/shared.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

// Ngrx Redux Modules
import { EffectsModule } from '@ngrx/effects';
import { AppStateModule } from './app-state.module';
import { PureSideChatboxEffects } from './core/pure-components/pure-side-chatbox/pure-side-chatbox.effect';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,

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
