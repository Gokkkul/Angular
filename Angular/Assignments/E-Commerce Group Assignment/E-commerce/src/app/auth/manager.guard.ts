import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn:'root'
})

class ManagerGuard implements CanActivate{
  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    

    const value = localStorage.getItem('isLogged');
    if(value!= 'true'){
      this.router.navigate(['/']);
      return false;
    }

    const role = localStorage.getItem('role');

    if(role !== 'customer'){
      this.router.navigate(['/']);
      return true;
    }

    this.router.navigate(['/login'])
    return false;
  }
  
}