import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from './_services/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'index', component: IndexComponent },
  { path: 'admin', component: AdminComponent },
  //{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard] },
  { path: 'update-employee/:id', component: UpdateEmployeeComponent},
  //{ path: 'employee-list', component: EmployeeListComponent },
  { path: '', redirectTo: 'welcome', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
