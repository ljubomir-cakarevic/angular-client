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
        private tokenStorage: TokenStorageService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const user: any = this.tokenStorage.getUser();
        if (user.roles.includes('ROLE_USER' || 'ROLE_MODERATOR')) {
            this.router.navigate(['/login']);
        }
        return true;
    }

}