import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser'
import { CommonModule } from '@angular/common';

//import { RegisterComponent } from '../register/register.component';
//import { EducationComponent } from '../education/education.component';

@NgModule({
    declarations: [LoginComponent],
    imports: [LoginRoutingModule, FormsModule,BrowserModule,ReactiveFormsModule,CommonModule],
    exports: [LoginComponent],
})
export class LoginModule {}