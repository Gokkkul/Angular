import { Injectable } from '@angular/core';
import { user } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  userList: user [] = [
    {
      id: 1,
      name: 'Tony Stark',
      email: 'tonystark@example.com',
    },
    {
      id: 2,
      name: 'Peter Parker',
      email: 'perterparker@example.com',
    },
    {
      id: 3,
      name: 'Steve Rogers',
      email: 'steverogers@example.com',
    }
  ]

  
  
  

}
