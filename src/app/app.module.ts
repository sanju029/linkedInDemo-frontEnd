import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { RegisterComponent } from './register/register.component';
import { RegisterModule } from './register/register.module';
import { ProfileModule } from './profile/profile/profile.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
    RegisterModule,
    ProfileModule,
  ],
  providers: [
    // {provide: ErrorHandler, useClass: GlobalErrorHandler}],
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
