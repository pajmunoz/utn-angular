import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticationState = new BehaviorSubject(localStorage.getItem("login")?true:false)

  authenticate(){
    this.authenticationState.next(true);
    localStorage.setItem("login", "true")
  }
  isAuthenticate(){
    return this.authenticationState
  }
  isAuthenticated(){
    return this.authenticationState.value
  }
  logout(){
    this.authenticationState.next(false); 
    localStorage.removeItem("login")
    localStorage.removeItem("userName")
  }
}
