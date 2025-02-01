import { Injectable } from '@angular/core';


export interface Task{
  id: number;
  name: string;
  status: 'Pending' | 'In Progress' | 'Completed';
  priority: 'Low' | 'Medium' | 'High';
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [];
  private taskIdCounter = 1;
  constructor() { }

  getTasks(): Task[] {
    return this.tasks;
  }

  // addTask
  addTask(taskName: string, priority:'Low' | 'Medium' | 'High'):void {
    const newTask: Task = {
      id: this.taskIdCounter++,
      name: taskName,
      status: 'Pending',
      priority
    }
    this.tasks.push(newTask);
  }

  // update task status
  updateTaskStatus(id:number, status:'Pending' | 'In Progress' | 'Completed'): void{
    const task = this.tasks.find(task => task?.id === id);
    if(task){
      task.status = status;
    }
  }



  // delete task
  deleteTask(id: number): void{
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

}
