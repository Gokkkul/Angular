import { Injectable } from '@angular/core';

interface user{
  id: number;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  users: user [] = [
    {
      id: 1,
      email: 'user@example.com',
      password: '123456'
    }
  ]
}
