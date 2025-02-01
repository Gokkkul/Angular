import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-test',
  standalone: false,
  
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  constructor(private productService: ProductService){

  }
  ngOnInit() {
    
    this.productService.shareData.subscribe(res => {
      console.log(res);      
    })
  }
}
