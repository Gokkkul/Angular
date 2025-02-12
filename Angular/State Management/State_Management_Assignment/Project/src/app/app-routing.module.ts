import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserModule } from './user/user.module';
import { ProfileComponent } from './user/profile/profile.component';
import { AuthGuard } from './user/guards/auth.guard';
// import { Auth}

const routes: Routes = [
  {path: '', component: UserModule},
  {path: 'user/:id', component: ProfileComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
