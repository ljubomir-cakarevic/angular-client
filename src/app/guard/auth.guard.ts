import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../_services/auth.service';

import { Router } from '@angular/router';
import { TokenStorageService } from '../_services/token-storage.service';

@Injectable({
    providedIn: 'root'
  })
export class AuthGuard implements CanActivate {
    
    constructor(
        private authService: AuthService, 
        private router: Router, 
        private tokenStorage: TokenStorageService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        /* //if user is logged in(token is present) returns true (can continue to the special route)
        if(this.authService.loggedIn()) {
            return true;
            
        //if user is not logged in, redirect to login route
        }else {
            this.router.navigate(['/login']);
            return false;
        } 
        const user: any = this.tokenStorage.getUser();
        if (user.roles === 'ROLE_ADMIN') {
        this.router.navigate(['/']);
        }
        return true;
        } */
        const user: any = this.tokenStorage.getUser();
        if (user.roles.includes('ROLE_USER' || 'ROLE_MODERATOR')) {
        this.router.navigate(['/login']);
        }
        return true;
  }

}