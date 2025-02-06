import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AdminModule,
    // AuthModule,
    // OrderModule,
    // ProductModule,
    // UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
