import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

export interface course{
  id: number;
  img: string;
  name: string;
  description: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})



export class CourseService {

  cartList: course [] = [];
  cart = new ReplaySubject<course[]>(1)
  cart$ = this.cart.asObservable();

  constructor() { 
    this.cart.next(this.cartList);
  }

  courses: course[] = [
    {
      id: 101,
      name: 'JavaScript Beginner to Advance',
      price: 1000,
      img: 'course1.png',
      description: 'This course contains all the JavaScript concepts from basics to Advance'
    },
    {
      id: 102,
      name: 'TypeScript Beginner to Advance',
      price: 1000,
      img: 'course2.png',
      description: 'This course contains all the TypeScript concepts from basics to Advance'
    },
    {
      id: 103,
      name: 'Angular Beginner to Advance',
      price: 1000,
      img: 'course3.png',
      description: 'This course contains all the Angular concepts from basics to Advance'
    }
  ];

  // addToCart(item: course){
  //   this.cart.push(item);
  //   console.log(this.cart);
    
  // }
addToCart(item: course){
    this.cartList.push(item);
    console.log(this.cart);
    this.cart.next(this.cartList);
  }
  
}
