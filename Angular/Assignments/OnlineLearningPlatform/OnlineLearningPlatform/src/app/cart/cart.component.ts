import { Component } from '@angular/core';
import { course, CourseService } from '../courses/services/course.service';


@Component({
  selector: 'app-cart',
  standalone: false,
  
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartList: course [] = [];
  constructor(private service: CourseService){
    this.service.cart$.subscribe(item => this.cartList = item)
  }
}
