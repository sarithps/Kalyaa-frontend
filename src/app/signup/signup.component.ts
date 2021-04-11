import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user={
    email:'',
    password:''
  }

  regex = new RegExp('((?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,30})')
  mail = new RegExp('^[a-z0-9,%+]+@[a-z0-9.-]+\.[a-z]{2,4}$')

  // signForm = this.fb.group(
  //   {
  //     email: ['', [Validators.required,Validators.email] ] ,
  //     password: ['', [Validators.required, Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$')] ]
  //   }
  // )

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  signUp(){
    if(this.regex.test(this.user.password) && this.mail.test(this.user.email) ){
      this.router.navigate(['/login']);
    }
    else{
      alert('Please ente a valid email and password');
    }
  }

}
