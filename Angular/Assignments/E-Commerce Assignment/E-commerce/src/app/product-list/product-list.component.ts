import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, NgFor],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
[x: string]: any;

  constructor(public service: CartService){
    
  }

}
