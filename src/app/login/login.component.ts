import { Component, OnInit, Input, Output} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {FormGroup, FormControl, Validators,ReactiveFormsModule} from '@angular/forms';


import {LoginService} from './login.service';
import { Login } from './login';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    username: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  });

  signIn(loginForm: FormGroup): void {
    this.loginService.signInToken(this.loginForm).subscribe(
      (data: User) => {
        if(data.password === this.loginForm.value.password)
        {
        localStorage.setItem('user', loginForm.value.username);
        //console.log(data);
        this.router.navigateByUrl(`user/${data.username}`);

        }
        else
        {
          this.router.navigateByUrl(`login`);
        }
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

  onRegister(): void{

    this.router.navigateByUrl(`register`);

  }



  ngOnInit(): void {
  }

 constructor(private loginService: LoginService, private router: Router) { }

}
