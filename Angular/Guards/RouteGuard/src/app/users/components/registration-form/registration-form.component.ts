import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  standalone: false,
  
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.css'
})
export class RegistrationFormComponent {
  userDetails = {
    name: '',
    email: '',
    gender: '',
    password: '',
  };

  submitForm(form: any): void {
    
      console.log('Form data:', this.userDetails);
  }
}
