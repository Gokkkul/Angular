import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User{
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  users: User [] = [
    {
      id: 1,
      name: 'Tony Stark',
      email: 'tonystark@example.com'
    },
    {
      id: 2,
      name: 'Peter Parker',
      email: 'peterparker@example.com'
    }
  ] 

  constructor() { }

  user = new BehaviorSubject<string | null | object>(null);
  isLoggedIn = new BehaviorSubject<boolean>(false);

  user$ = this.user.asObservable();
  isLoggedIn$ = this.isLoggedIn.asObservable();
  userlogin = false;

  login(username: string, id: number){
    // this.users.push({username,})
    this.userlogin = true;
    this.user.next({username,id});
    this.isLoggedIn.next(true)
    localStorage.setItem('user', username);
    localStorage.setItem('isLoggedIn', 'true');
  }

  logout(){
    this.userlogin = false;
    this.user.next(null);
    this.isLoggedIn.next(false)
    localStorage.removeItem('user');
    localStorage.removeItem('isLoggedIn');
  }

  editProfile(username: string, email: string){
    this.user.next({username,email});
  }

}
