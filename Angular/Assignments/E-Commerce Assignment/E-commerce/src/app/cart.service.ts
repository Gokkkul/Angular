import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface Product{
  id:number | string;
  name: string;
  price: number | string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  products: Product[] = [
    {
      id: 1,
      name: 'Mobile',
      price: 90000
    },
    {
      id: 2,
      name: 'Laptop',
      price: 100000
    },
    {
      id: 3,
      name: 'HeadPhones',
      price: 60000
    }
  ];

  cart: Product[] = [];

  addProduct(id:number | string, name: string, price: number | string): void{
    this.cart.push({
      id: id,
      name: name,
      price: price
    })
  }

  getCart(): Product[]{
    return this.cart;
  }

  totalPrice(): void{

  }

}
