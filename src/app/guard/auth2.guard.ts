import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class Auth2Guard implements CanActivate {

  constructor(
    private authService: AuthService, 
    private router: Router, 
    private tokenStorage: TokenStorageService) {}
    
  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      
      const user: any = this.tokenStorage.getUser();
      if (user.roles === 'ROLE_USER') {
        this.router.navigate(['/']);
      }
      return true;
      
      
  }
  
}
