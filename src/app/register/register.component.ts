import { Component, OnInit, ViewChild } from '@angular/core';
import { RegisterService } from './register.service';
import { User } from '../user';
import { Router } from '@angular/router';
import {
  FormsModule,
  NgForm,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user!: User;
  submitted = false;

  @ViewChild('f', { static: false }) signupForm: NgForm | undefined;
  constructor(
    private registerService: RegisterService,
    private router: Router
  ) {}
  temp: any;

  registerForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
    this.registerService.setUrl('http://localhost:8080/user/createUser');
  }

  newUser(): void {
    this.submitted = false;
  }

  save(): void {
    this.registerService.create(this.user).subscribe(
      (data) => {
        console.log(data);
        this.gotoList();
      },
      (error) => console.log(error)
    );
    console.log(this.user);
  }

  onSubmit(): void {
    this.registerService.create(this.registerForm.value).subscribe((data) => {
      localStorage.setItem('user', this.registerForm.value.username);
      this.router.navigateByUrl(`user/${this.registerForm.value.username}`);
    });
  }

  gotoList(): void {
    this.router.navigate(['/users']);
  }
  post(): void {}
}
