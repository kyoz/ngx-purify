import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// App Router
import { AppRoutingModule } from './app.routing';

// Pure Modules
import { PureCoreModule } from './core/core.module';

// Components
import { AppComponent } from './app.component';
import { MainContainer } from './containers/main-container/main-container.component';
import { MinimalContainer } from './containers/minimal-container/minimal-container.component';


@NgModule({
  declarations: [
    AppComponent,
    MainContainer,
    MinimalContainer
  ],
  imports: [
    BrowserAnimationsModule,

    // App Router
    AppRoutingModule,

    // Pure Modules
    PureCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
