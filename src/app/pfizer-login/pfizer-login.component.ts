import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pfizer-login',
  templateUrl: './pfizer-login.component.html',
  styleUrls: ['./pfizer-login.component.css']
})
export class PfizerLoginComponent implements OnInit {

  loginForm : FormGroup; 

  constructor(
    //private formBuilder: FormBuilder, 
    //private formGroup: FormGroup,
    // private route: ActivatedRoute,
    // private router: Router

  ) { }

  ngOnInit() {
  }

}
