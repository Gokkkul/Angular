import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private auth: AuthService, private router: Router){}

  login(){
    this.auth.login('Gokul',6);
    this.router.navigate(['profile'])
  }

  logout(){
    this.auth.logout();
    this.router.navigate([''])
  }
}
