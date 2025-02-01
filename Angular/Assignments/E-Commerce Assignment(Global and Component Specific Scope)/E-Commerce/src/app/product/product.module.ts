import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list/product-list.component';
import { TestComponent } from './test/test.component';



@NgModule({
  declarations: [
    ProductListComponent,
    TestComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
