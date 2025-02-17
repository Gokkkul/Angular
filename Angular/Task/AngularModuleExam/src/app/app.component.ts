import { Component } from '@angular/core';
import { Product } from './Models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularModuleExam';

  
    productsArray: Product[] = [
      {
        id: 1,
        name: 'Iphone',
        description: 'This is a smartphone',
        price: 90000
      },
      {
        id: 2,
        name: 'Macbook',
        description: 'This is a Powerful Computer',
        price: 100000
      },
      {
        id: 3,
        name: 'Airpod Max',
        description: 'This are Headphone',
        price: 60000
      }
    ];
}
