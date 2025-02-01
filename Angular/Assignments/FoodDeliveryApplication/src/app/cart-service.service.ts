import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  
  private cartItems: any[] = [];
  private total: number = 0;
  constructor() { }

  
  addToCart(item: any) {
    this.cartItems.push(item);
    this.calculateTotal();
  }

  removeFromCart(item: any) {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1);
    }
    this.calculateTotal();
  }

  displayCart() {
    return this.cartItems;
  }

  totalPrice() {
    return this.total;
  }

  private calculateTotal() {
    this.total = this.cartItems.reduce((acc, item) => acc + item.price, 0);
  }
}
