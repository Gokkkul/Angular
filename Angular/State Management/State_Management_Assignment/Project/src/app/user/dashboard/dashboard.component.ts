import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  user: string | null |object = null;
  isLoggedIn: boolean= false;

  constructor(private auth: AuthService){
    this.auth.user$.subscribe((username) => {
      this.user = username;
    })
    

    this.auth.isLoggedIn$.subscribe((state) => {
      this.isLoggedIn = state;
    })

  }



}
