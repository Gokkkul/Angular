import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }


  adminLogin(){
    alert("Admin Login Successfull...!");
    localStorage.setItem('user','Admin');
    localStorage.setItem('isLoggedIn', 'true');
    this.router.navigate(['/']);
  }

  userLogin(){
    alert("User Login Successfull...!");
    localStorage.setItem('user','User');
    localStorage.setItem('isLoggedIn', 'true');
    this.router.navigate(['/']);
  }
}
