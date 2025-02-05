import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { RegisterComponent } from './user/register/register.component';

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
  {
    path: "register", component: RegisterComponent
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
