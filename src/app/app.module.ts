import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PfizerLoginComponent } from './pfizer-login/pfizer-login.component';
import { PfizerHomeComponent } from './pfizer-home/pfizer-home.component';

import { FormsModule } from '@angular/forms';
import { PfizerPackOrderComponent } from './pfizer-pack-order/pfizer-pack-order.component';
import { GenerateTicketComponent } from './generate-ticket/generate-ticket.component';

import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import { CookieService } from 'ngx-cookie-service';
import { GlobalVariables } from './global-variables';

@NgModule({
  declarations: [
    AppComponent,
    PfizerLoginComponent,
    PfizerHomeComponent,
    PfizerPackOrderComponent,
    GenerateTicketComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BackButtonDisableModule.forRoot()
  ],
  providers: [CookieService, GlobalVariables],
  bootstrap: [AppComponent]
})
export class AppModule { }
