import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { HomeComponent } from './home/home/home.component';
import { UserModule } from './user/user.module';
import { ViewCourseComponent } from './courses/view-course/view-course.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:"courses" , component: CourseListComponent},
  {path:"home" , component: HomeComponent},

  { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  // {path:"courses/:id" , component: CourseListComponent},
  // {path:"profile" , component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
