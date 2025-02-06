import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private router: Router) { }

  products: product[] = [
    {
      id: 101,
      title: 'Mobile',
      price: 90000,
      img: '',
      description: 'This is description of the mobile product'
    }
  ]

  addProducts(product: product){
    this.products.push(product)
  }



}
