import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup,  Validators } from "@angular/forms";
import {PasswordChecker} from "./custom-validators/password.checker";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';

  signupForm: FormGroup;
  submitted = false;
    
  constructor( private formbuilder: FormBuilder){}

  ngOnInit() {

    this.signupForm = this.formbuilder.group({
      FirstName : ['', Validators.required ],
      LastName : ['', Validators.required ],
      Email : ['',[Validators.required, Validators.email]],
      Password : ['', [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      ConfirmPassword : ['', Validators.required],
      DOB : ['', Validators.required],
      Country : ['', Validators.required],
      acceptTandC : [false, Validators.requiredTrue]
    },{
      Validators:PasswordChecker("Password", "ConfirmPassword")
  });

  }

  get h() {
    return this.signupForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if(this.signupForm.invalid){
      return;
    }

    console.table(this.signupForm.value);
    console.table(this.signupForm);

    alert("Success Signup\n" + JSON.stringify(this.signupForm.value))
  
  
  }  

  

  onReset() {
    this.submitted = false;
    this.signupForm.reset();
  }

}
  