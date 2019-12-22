import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PfizerLoginComponent } from './pfizer-login/pfizer-login.component';
import { PfizerHomeComponent } from './pfizer-home/pfizer-home.component';

@NgModule({
  declarations: [
    AppComponent,
    PfizerLoginComponent,
    PfizerHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
