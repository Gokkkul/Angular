import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

export interface product{
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  constructor(private cartService: CartService){}

  products: product [] = [
      {
        id: 101,
        name: 'iPhone',
        price: 90000
      },
      {
        id: 102,
        name: 'Macbook',
        price: 100000
      },
      {
        id: 103,
        name: 'AirpodMax',
        price: 60000
      }
    ];

    addProduct(product: product){
      this.cartService.addProduct(product);
    }
}
