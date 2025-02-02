import { Component } from '@angular/core';

interface course{
  id: number;
  img: string;
  name: string;
  description: string;
  price: number;
}

@Component({
  selector: 'app-course-list',
  standalone: false,
  
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {

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

}
