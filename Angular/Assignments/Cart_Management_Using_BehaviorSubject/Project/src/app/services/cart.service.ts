import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface cart {
  id: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: cart[] = [];

  private cart = new BehaviorSubject<any>(0);
  cart$ = this.cart.asObservable();


  constructor() {}

  addProduct(product: cart) {
    this.cartItems.push(product);
    this.cart.next(this.cartItems)
  }


  removeProduct(product: cart) {
    const index = this.cartItems.findIndex(item => item.id === product.id);
    if (index > -1) {
      this.cartItems.splice(index, 1);
    }
    this.cart.next(this.cartItems)
  }

  getItems() {
    return this.cartItems;
  }

  clear() {
    this.cartItems = [];
    this.cart.next(this.cartItems)
  }
}
