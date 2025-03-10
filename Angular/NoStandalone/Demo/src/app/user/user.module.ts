import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [LoginComponent, RegistrationComponent, ProfileComponent],
  imports: [CommonModule],
  exports: [LoginComponent, RegistrationComponent, ProfileComponent],
})
export class UserModule {}
