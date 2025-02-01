import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { ProductsComponent } from './component/products/products.component';
import { PageNotFountComponent } from './component/page-not-fount/page-not-fount.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent},
  {path:'products', component: ProductsComponent},
  // {path:'users/:id', component: UserComponent}, // routes with parameters
  {path:'abouut', redirectTo:'/about'},
  // {path:}

  // {path:'**', component: PageNotFountComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
