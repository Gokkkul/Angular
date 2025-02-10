import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  GuardResult,
  MaybeAsync,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {

    // const value = localStorage.getItem('isLogged');

    // if (value !== 'true') {
    //   return false;
    // }

    // const role = localStorage.getItem('role');

    // if (role === 'Admin') {
    //   return true;
    // }

    // this.router.navigate(['/login']);
    // return false;

    const user = localStorage.getItem('user');

    if(user ==='Admin'){
      return true;
    }

      return true;
  }
}
