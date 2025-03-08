import { Component } from '@angular/core';
import { course, CourseService } from '../courses/services/course.service';


@Component({
  selector: 'app-cart',
  standalone: false,
  
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  totalamt = 0;
  cartList: course [] = [];
  constructor(private service: CourseService){
    this.service.cart$.subscribe(item => this.cartList = item);
    this.totalamt = this.cartList.reduce((total, curval) => total + curval.price, 0)
  }

  removeCourse(index:number){
    this.service.removeCourse(index);
    this.totalamt = this.cartList.reduce((total, curval) => total + curval.price, 0)
  }


}
