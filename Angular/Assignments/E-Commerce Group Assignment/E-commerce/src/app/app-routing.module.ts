import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { AdminGuard } from './auth/admin.guard';

const routes: Routes = [
  {path: 'user',
    loadChildren: () => import ('./user/user.module').then((m) => m.UserModule)
  },
  {path: 'products',
    loadChildren: () => import ('./product/product.module').then((m) => m.ProductModule)
  },
  {path: 'orders',
    loadChildren: () => import ('./order/order.module').then((m) => m.OrderModule)
  },
  {path: 'admin',
    loadChildren: () => import ('./admin/admin.module').then((m) => m.AdminModule), canActivate: [AdminGuard]
  },
  // {
  //   path: "register", component: RegisterComponent
  // },
  // {
  //   path: "login", component: LoginComponent
  // },
  {
    path: "", component: HomeComponent
  },
  {
    path: '**',
    component: NotFoundComponentComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
