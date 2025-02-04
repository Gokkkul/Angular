import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { SettingsComponent } from './dashboard/settings/settings.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { FormComponent } from './form/form.component';
import { LoginFormComponent } from './users/components/login-form/login-form.component';
import { RegistrationFormComponent } from './users/components/registration-form/registration-form.component';

const routes: Routes = [
  
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationFormComponent},
  {path: 'form', component: FormComponent, canDeactivate: [AuthGuard]},
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard], canActivateChild:[AuthGuard], children:[
    {path: 'settings', component: SettingsComponent},
    {path: 'profile', component: ProfileComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
