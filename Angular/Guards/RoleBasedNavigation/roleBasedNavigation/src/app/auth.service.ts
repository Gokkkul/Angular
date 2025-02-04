import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  adminLogin(){
   localStorage.setItem('logggedInAs', 'Admin');
   this.router.navigate(['']);
  }
  maangerLogin(){
   localStorage.setItem('logggedInAs', 'Manager')
   this.router.navigate(['']);
  }
  customerSupportLogin(){
   localStorage.setItem('logggedInAs', 'customerSupport')
   this.router.navigate(['']);
  }
}
