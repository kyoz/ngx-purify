import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Pure Modules
import { PureCoreModule } from './core/core.module';
import { PureSharedModule } from './shared/shared.module';

// Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,

    // Pure Modules
    PureCoreModule,
    PureSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
