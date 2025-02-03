import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

constructor(private router: Router, private service: AuthService ){

}
  
  // login(){
  //  localStorage.setItem('loggedIn', 'true');
  //   this.router.navigate(['dashboard'])
  // }
  login(){
   this.service.login();
  }
}
