import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'GuardsProject';

  constructor(private authService: AuthService, private router: Router){}


  adminLogin(){
    this.authService.adminLogin();
    this.router.navigate(['/']);
  }

  userLogin(){
    this.authService.userLogin();
    this.router.navigate(['/']);
  }
}
