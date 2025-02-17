import { Component, Input } from '@angular/core';
import { Product } from '../../Models/product.model';

@Component({
  selector: 'app-product-catalog',
  standalone: false,
  templateUrl: './product-catalog.component.html',
  styleUrl: './product-catalog.component.css'
})
export class ProductCatalogComponent {

  @Input() products!: Product[];

   // Function to Handle the added product
  addToCart(product: Product) {
    alert('Product added to the cart...!')
    console.log('Product added to cart:', product);

   
  }


}
