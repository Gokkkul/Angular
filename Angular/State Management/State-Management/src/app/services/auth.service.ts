import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user = new BehaviorSubject<string | null>(null);
  user$ = this.user.asObservable();

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  login(username: string){
    this.user.next(username);
    this.isLoggedInSubject.next(true)
    localStorage.setItem('user', username);
    localStorage.setItem('isLoggedIn', 'true');
  }

  logout(){
    this.user.next(null);
    this.isLoggedInSubject.next(false)
    localStorage.removeItem('user');
    localStorage.removeItem('isLoggedIn');
  }

  constructor() { }
}
