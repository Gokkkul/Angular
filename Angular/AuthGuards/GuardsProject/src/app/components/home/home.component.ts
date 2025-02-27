import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

   constructor(private authService: AuthService, private router: Router){}
  
  
    adminLogin(){
      this.authService.adminLogin();
    }
  
    userLogin(){
      this.authService.userLogin();

    }

}
