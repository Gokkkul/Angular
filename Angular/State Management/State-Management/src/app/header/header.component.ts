import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  user: string | null = null;
  isloggedIn: boolean= false;
  constructor(private auth: AuthService){
    this.auth.user$.subscribe((username) => {
      this.user = username;
    });

    this.auth.isLoggedIn$.subscribe((state) => {
      this.isloggedIn=state;
    })

  }

  login(){
    this.auth.login('Gokul')
  }

  logout(){
    this.auth.logout()
  }
}
