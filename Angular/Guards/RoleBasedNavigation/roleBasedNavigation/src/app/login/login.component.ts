import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  
constructor(private service: AuthService){}

adminLogin(){
  this.service.adminLogin();
}

managerLogin(){
  this.service.managerLogin();
}

customerSupportLogin(){
  this.service.customerSupportLogin();
}


}
