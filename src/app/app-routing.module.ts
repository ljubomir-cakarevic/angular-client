import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from './guard/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { UserComponent } from './user/user.component';
import { Auth2Guard } from './guard/auth2.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'index', component: IndexComponent },
  { path: 'user', component: UserComponent, canActivate: [Auth2Guard]},
  { path: 'welcome', component: WelcomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard] },
  { path: 'update-employee/:id', component: UpdateEmployeeComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, Auth2Guard]
})
export class AppRoutingModule { }
