import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isLogin = false;
  isShowing: boolean = false;
  constructor(private auth: AuthService) {
    this.auth.isAuthenticate().subscribe((login) => {
      this.isLogin = login;
    });
  }

  toggleSidenav() {
    this.isShowing = !this.isShowing;
  }

  callMethods() {
    this.toggleSidenav();
  }
  refresh(): void {
    window.location.reload();
  }
  logout() {
    this.auth.logout();
    localStorage.clear();
    this.refresh()
  }
  
}
