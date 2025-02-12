import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { product } from '../product-list/product-list.component';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  // cartItems:Array<product>=[];
  cartItems: product [] = [];

  constructor(public service: CartService){
    this.service.cart$.subscribe((items) => {
      this.cartItems=items;
    }) 
  }

  removeProduct(product: product){
    this.service.removeProduct(product);
  }
}
