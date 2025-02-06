import { Injectable } from '@angular/core';


interface admin{
  id: number;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }


  admin: admin [] = [
    {
      id: 1,
      email: 'admin@example.com',
      password: '123456'
    }
  ]

}
