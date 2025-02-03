// import { CanActivateFn } from '@angular/router';
// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };

import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  GuardResult,
  MaybeAsync,
  RouterStateSnapshot,
} from '@angular/router';
import { Router } from '@angular/router';
import { CanDeactivate } from '@angular/router';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate , CanDeactivate<any>, Resolve<any>{
  constructor(private router: Router) {}
  

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const isAuthenticated = localStorage.getItem('loggedIn') === 'true';
    if (!isAuthenticated) {
      alert('Login First');
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }


  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    const isAuthenticated = localStorage.getItem('loggedIn') === 'true';
    const role = localStorage.getItem('role')
    if(!isAuthenticated){
      alert('Login First');
      this.router.navigate(['login']);
      return false;
    }
    else{
      if(role!=='Admin'){
        alert("Only Admin can Access")
        return false;
      }
    }
    return true;
  }



  canDeactivate(component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean {



    return true;
  }


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    
    const userData = {id: 1, name: "John Doe", email: 'john@example.com' };
    return of(userData)
  }
  
}
