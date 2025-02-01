import { Component } from '@angular/core';
import { Task, TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  standalone: false,
  
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {

  tasks: Task[] = [];

  constructor(private taskService: TaskService){}

  ngOnInit(){
    this.tasks = this.taskService.getTasks();
  }

  addTask(name: string, priority: 'Low' | 'Medium' | 'High'){
    this.taskService.addTask(name, priority);
    this.tasks = this.taskService.getTasks();
  }

  deleteTask(id: number){
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getTasks();
  }

  updateTaskStatus(id: number, status: 'Pending' | 'In Progress' | 'Completed') {
    this.taskService.updateTaskStatus(id,status);
    this.tasks = this.taskService.getTasks();
  }

}
