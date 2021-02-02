import { Component, OnInit,ViewChild} from '@angular/core';
import { RegisterService } from './register.service';
import { User } from '../user';
import { Router } from '@angular/router';
import { FormsModule,NgForm} from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  user: User = new User();
  submitted = false;

  @ViewChild('f', { static: false }) signupForm: NgForm | undefined ;
  constructor(private registerService: RegisterService,
    private router: Router) { }
    temp: any;
  ngOnInit(){
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
  }

  save() {
    this.registerService
    .createUser(this.user).subscribe(data => {
      console.log(data)
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.temp = this.signupForm?.value
    console.log();
    this.user.username=this.temp.username;
    this.user.password=this.temp.password;
    this.user.fullName=this.temp.fullName;
    this.user.email=this.temp.email;
    this.user.phoneNumber=this.temp.phoneNumber;
    this.user.address=this.temp.address;
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/users']);
  }
  post(){
    
  }

}
// import {Component, OnInit, ViewChild} from '@angular/core';
// import {NgForm} from '@angular/forms';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrls: ['./register.component.css']
// })
// export class RegisterComponent implements OnInit {

//   @ViewChild('f', { static: false }) signupForm: NgForm | undefined ;
//   constructor() { }
//   ngOnInit(): void {
//   }
//   // tslint:disable-next-line:typedef
//   onSubmit() {
//     // @ts-ignore
//     console.log(this.signupForm.value);
//     // @ts-ignore
//     this.signupForm.reset();
//     }


// }