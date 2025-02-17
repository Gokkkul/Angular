import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../Models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: false,
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() productAddedToCart = new EventEmitter<Product>();

  addToCart() {
    this.productAddedToCart.emit(this.product);
  }

}
