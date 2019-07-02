import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// App Router
import { AppRoutingModule } from './app-routing.module';

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
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    // App Router
    AppRoutingModule,

    // Pure Modules
    PureCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
