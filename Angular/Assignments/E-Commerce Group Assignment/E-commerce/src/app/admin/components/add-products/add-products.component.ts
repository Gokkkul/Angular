import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-products',
  standalone: false,
  
  templateUrl: './add-products.component.html',
  styleUrl: './add-products.component.css'
})
export class AddProductsComponent {

  constructor(private productService: ProductService){}

  addProductsForm: FormGroup = new FormGroup({
    product_id: new FormControl(''),
    product_title: new FormControl(''),
    product_price: new FormControl(''),
    product_img_link: new FormControl(''),
    product_description: new FormControl(''),
    })

    onSubmit(form: FormGroup){

    
      alert("Product Added Successfully");
      this.productService.addProducts(form.value);
      console.log("product added");
      
      
      // console.log(this.addProducts);
      
    }

}
