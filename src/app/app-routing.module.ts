import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PfizerHomeComponent} from './pfizer-home/pfizer-home.component';
import { PfizerLoginComponent} from './pfizer-login/pfizer-login.component';

const routes: Routes = [
  { path: '', component: PfizerLoginComponent },
  { path: 'pfizer-home', component: PfizerHomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
