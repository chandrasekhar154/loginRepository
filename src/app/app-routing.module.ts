import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PfizerHomeComponent} from './pfizer-home/pfizer-home.component';
import { PfizerLoginComponent} from './pfizer-login/pfizer-login.component';
import { PfizerPackOrderComponent } from './pfizer-pack-order/pfizer-pack-order.component';
import { GenerateTicketComponent } from './generate-ticket/generate-ticket.component';

const routes: Routes = [
  { path: '', component: PfizerLoginComponent },
  { path: 'pfizer-home', component: PfizerHomeComponent },
  { path: 'pfizer-pack-order', component: PfizerPackOrderComponent },
  { path: 'generate-ticket', component: GenerateTicketComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
