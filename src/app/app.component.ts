import { Component, OnInit, Injectable, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthGuard } from './auth-guard';
import { Location } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { GlobalVariables } from './global-variables';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()

export class AppComponent implements OnInit {

  @Input() person;

  model : any = {};

  title = 'CSDS Scanner';

  constructor( private cookieService: CookieService, public globalVariable: GlobalVariables) {
    
  }

  ngOnInit() {
    document.getElementById("hello")["value"] = "1";
    this.globalVariable.honeyPot = document.getElementById("hello")["value"];
    console.log(this.globalVariable.honeyPot);
  }

}