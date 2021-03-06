import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AngularMaterialModule } from "./angular-material.module";

import { FlexLayoutModule } from '@angular/flex-layout';

import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { WelcomeComponent } from './welcome/welcome.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { EmployeeComponent } from './employee/employee.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { ProfileComponent } from './profile/profile.component';
import { FooterComponent } from './footer/footer.component';
import { DialogDeleteComponent } from './employee/dialog-delete/dialog-delete.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IndexComponent,
    SignupComponent,
    HeaderComponent,
    SidenavListComponent,
    WelcomeComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeeComponent,
    UpdateEmployeeComponent,
    ProfileComponent,
    FooterComponent,
    DialogDeleteComponent,
    UserComponent,
    
  ],
  entryComponents: [ DialogDeleteComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule
  ],
  
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
