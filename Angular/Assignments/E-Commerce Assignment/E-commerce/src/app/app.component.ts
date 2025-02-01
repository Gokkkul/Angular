import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartService } from './cart.service';
import { ProductListComponent } from "./product-list/product-list.component";
import { CartComponent } from "./cart/cart.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductListComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'E-commerce';
  cart: any;
  constructor(private cartService: CartService) {}

  // ngOnInit(): void {
  //   this.cartService.onClickCart.next('asgjvdgf');
  //   this.cartService.onClickCart.subscribe(res => {
  //     console.log(res);      
  //   })
  // }
  
  
  
}
