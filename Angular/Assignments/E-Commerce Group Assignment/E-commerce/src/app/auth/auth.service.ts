import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from './roles.enum';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  // userLogin(){
  //   localStorage.setItem('isLoggedIn', 'true')
  //   localStorage.setItem('role', 'Role.Customer');
  //   this.router.navigate(['/']);
  // }

  // isUserAuthenticated(){
  //   const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  //   if(!isLoggedIn){
  //     this.router.navigate(['/login']);
  //     return false;
  //   }else{
  //     return true;
  //   }
  // } 

  login(role: Role){
    localStorage.setItem('isLogged','true');
    localStorage.setItem('role',JSON.stringify(Role[role]))
  }

}
