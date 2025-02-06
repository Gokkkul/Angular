import { Component } from '@angular/core';
import { product } from '../../models/product.model';
import { ProductService } from '../../admin/services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: product[] = []
  constructor(private productService: ProductService){}

  ngOnInit(){
    this.products = this.productService.products;
  }

  
}
