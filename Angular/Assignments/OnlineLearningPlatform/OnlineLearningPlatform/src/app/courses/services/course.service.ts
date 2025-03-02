import { Injectable } from '@angular/core';

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

  cart: course [] = [];

  constructor() { }

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

  addToCart(item: course){
    this.cart.push(item);
    console.log(this.cart);
    
  }
}
