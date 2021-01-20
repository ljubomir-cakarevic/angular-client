import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { TokenStorageService } from './token-storage.service';


const AUTH_API = 'http://localhost:8080/boot-camp-project/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;
  roles: any;

  constructor(private http: HttpClient, private router: Router,
     private tokenStorageService: TokenStorageService) { }

  login(username: string, password: string): Observable<any> {
    this.authSuccessufully();
   
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }
  
  loggedIn(){
    //check 
    return !!localStorage.getItem('auth-token');
    
  }

  private authSuccessufully(): boolean{
    const user: any = this.tokenStorageService.getUser();
    if (user.roles === 'ROLE_ADMIN') {
      //this.router.navigate(['/admin']);
    }
    return true;
  }


  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
    this.router.navigate(['/']);
    window.location.reload();
  }
  
}