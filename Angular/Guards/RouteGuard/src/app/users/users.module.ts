import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginFormComponent,
    RegistrationFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class UsersModule { }
