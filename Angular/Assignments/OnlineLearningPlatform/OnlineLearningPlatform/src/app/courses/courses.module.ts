import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CourseListComponent } from './course-list/course-list.component';
// import { ViewCourseComponent } from './course-list/view-course/view-course.component';


@NgModule({
  declarations: [
    CourseListComponent,
    // ViewCourseComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
