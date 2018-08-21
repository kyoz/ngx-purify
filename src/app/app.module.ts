import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Pure Modules
import { PureCoreModule } from './core/core.module';
import { PureSharedModule } from './shared/shared.module';

// Components
import { AppComponent } from './app.component';

// Ngrx Redux Modules
import { EffectsModule } from '@ngrx/effects';
import { AppStateModule } from './app-state.module';
import { PureSideChatboxEffects } from './core/pure-components/pure-side-chatbox/pure-side-chatbox.effect';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,

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
