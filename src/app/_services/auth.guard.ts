import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
  })
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        //if user is logged in(token is present) returns true (can continue to the special route)
        if(this.authService.loggedIn()) {
            return true;
        //if user is not logged in, redirect to login route
        }else {
            this.router.navigate(['/login']);
            return false;
        }
    }

}