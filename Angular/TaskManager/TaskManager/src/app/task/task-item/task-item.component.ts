import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task.service';

@Component({
  selector: 'app-task-item',
  standalone: false,
  
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {

  @Input() task!: Task;
  @Output() updateStatus = new EventEmitter<'Pending' | 'In Progress' | 'Completed'>();
  @Output() deleteTask = new EventEmitter<void>();

  changeStatus(status: 'Pending' | 'In Progress' | 'Completed'){
    this.updateStatus.emit(status);
  }

  removeTask() {
    this.deleteTask.emit();
  }

}
