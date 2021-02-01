import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {FormGroup, FormControl, Validators,ReactiveFormsModule} from '@angular/forms';

import {LoginService} from './login.service';
import { Login } from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //educations: Observable<Education[]>;
  loginForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  signIn(loginForm: FormGroup): void {
    this.authService.signInToken(this.loginForm).subscribe(
      (data: Login) => {
        localStorage.setItem('token', data.message);
        localStorage.setItem('user', loginForm.value.username);
        console.log(data);
      },
      (err: HttpErrorResponse) => {
        console.log(err);
      }
    );
  }

  onSubmit(): void{
    console.log(this.loginForm.value);
    this.signIn(this.loginForm);
  }


  constructor(private authService: LoginService) { }

  ngOnInit(): void {
  }

  // constructor() { }

  // ngOnInit(): void {
  // }

}
