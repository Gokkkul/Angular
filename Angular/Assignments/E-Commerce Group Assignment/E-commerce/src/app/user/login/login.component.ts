import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  constructor(private router: Router){}

  loginForm: FormGroup = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    })
  
    onSubmit(){
      console.log("Form submitted Successfully");
      console.log(this.loginForm);
    }

    login(){
        const email = this.loginForm.get('email')?.value;
        const password = this.loginForm.get('password')?.value;
        if (email === "admin@example.com" && password === "123456") {
         alert("Login Successful...!");
         localStorage.setItem('loggedIn','true');
         localStorage.setItem('user','admin');
         this.router.navigate(['admin/dashboard']);
        }else{
          alert("Invalid username or password...!")
        }

    }

}
