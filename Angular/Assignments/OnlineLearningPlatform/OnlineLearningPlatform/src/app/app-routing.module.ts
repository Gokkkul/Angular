import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { HomeComponent } from './home/home/home.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { ViewCourseComponent } from './courses/view-course/view-course.component';

const routes: Routes = [
  {path:"courses" , component: CourseListComponent, children:[
    {path:":id", component: ViewCourseComponent}
  ]},
  // {path:"courses/:id" , component: CourseListComponent},
  {path:"home" , component: HomeComponent},
  {path:"profile" , component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
