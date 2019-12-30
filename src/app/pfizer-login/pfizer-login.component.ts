import { Component, OnInit, Directive, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
// import { Http, Response, RequestOptions, Headers } from '@angular/http';


@Component({
  selector: 'app-pfizer-login',
  templateUrl: './pfizer-login.component.html',
  styleUrls: ['./pfizer-login.component.css']
})
export class PfizerLoginComponent implements OnInit {

  constructor(private router: Router) { }

  model: any = {};
  submitted = false;
  loginMessage = '';
  loginErrorStatus = false;
  

  loginFormSubmit() {
    this.submitted = true;
    this.model.loginErrorStatus = false;
    this.router.navigateByUrl('/pfizer-home');
    alert("..");
    if(this.model.pfizerNTID=="CHODAC" && this.model.pfizerPassword=="Nunet#v5kp") {
      this.model.loginMessage="Success"
    }
    else {
      this.loginMessage = "Invalid NTID / Password";
      this.loginErrorStatus = true;
    }
    console.log(this.model);
  }

  ngOnInit() {
    
  }

}
