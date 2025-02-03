import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  // logout(){
  //   localStorage.setItem('loggedIn', 'false');
  //   this.router.navigate(['/login'])
  // }

  constructor(private router: Router, private service: AuthService){

  }

  logout(){
    this.service.logout();
  }
}
