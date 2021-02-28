import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
// import { UserComponent } from './user/user.component';
// import { RegisterComponent} from './register/register.component';
// import {ProfileComponent} from './profile/profile/profile.component'


const routes: Routes = [
 
  // {
  //  path: 'user/:username',
  //  component: ProfileComponent
  // },
  // {
  //   path: 'user',
  //   component: UserComponent
  // },
  // {
  //   path: "register",
  //   component: RegisterComponent
  // },
  {
    path: '',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
