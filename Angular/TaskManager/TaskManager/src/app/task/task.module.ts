import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TaskActionsComponent } from './task-actions/task-actions.component';
import { TaskService } from './task.service';



@NgModule({
  declarations: [
    TaskListComponent,
    TaskItemComponent,
    TaskActionsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    TaskListComponent
  ]
})
export class TaskModule { }
