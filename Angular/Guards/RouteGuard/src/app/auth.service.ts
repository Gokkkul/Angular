import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  logout(){
    localStorage.setItem('loggedIn', 'false');
    this.router.navigate(['/login'])
  }

  login(){
    localStorage.setItem('loggedIn', 'true');
    localStorage.setItem('role','User')
    this.router.navigate(['dashboard'])
  }
}
