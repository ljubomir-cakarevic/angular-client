import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { AuthService } from 'src/app/_services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {
  
  @Output() sidenavToggle = new EventEmitter();
  

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string; 

  constructor(private tokenStorageService: TokenStorageService,  private authService: AuthService) { } 

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }
 
  onLogout(){
    this.authService.logout();
  }  
 
  

}
