import { Component } from '@angular/core';
import { CourseService } from '../services/course.service';
import { course } from '../services/course.service'


@Component({
  selector: 'app-course-list',
  standalone: false,
  
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {

  courses: course[];
  
  constructor(private service: CourseService){
  this.courses = service.courses;
 }

 addToCart(item: course){
  this.service.addToCart(item);
  // console.log(item);
  
 }


}
