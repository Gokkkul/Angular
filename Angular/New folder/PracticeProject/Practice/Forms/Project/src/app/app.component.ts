import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project';


  loginForm = new FormGroup({
    username : new FormControl(''),
    password: new FormControl('')
  })

  onSubmit(){
    
    console.log(this.loginForm.value);
    
  }
}
