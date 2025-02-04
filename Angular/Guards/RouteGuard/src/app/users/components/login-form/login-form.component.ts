import { Component } from '@angular/core';

@Component({
  selector: 'app-login-form',
  standalone: false,
  
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  userDetails = {
    name: '',
    email: '',
    address: '',
    mobile: '',
    age: null,
    gender: ''
  };

  submitForm(form: any): void {
    if (form.valid) {
      console.log('Form data:', this.userDetails);
    }
  }
}
