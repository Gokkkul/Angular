import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface product{
  id: number,
  name: string,
  price: number,
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  shareData = new Subject();
  shred = 'cfcfbhwe'

  constructor() { }
  
  products: product[] = [
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
      id:3,
      name: 'Headphones',
      price: 60000
    }
  ]

  getProducts(){
    return this.products;
  }
}
