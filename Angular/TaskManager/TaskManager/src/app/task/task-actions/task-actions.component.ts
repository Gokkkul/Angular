import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task.service';

@Component({
  selector: 'app-task-actions',
  standalone: false,
  
  templateUrl: './task-actions.component.html',
  styleUrl: './task-actions.component.css'
})
export class TaskActionsComponent {

    @Input() task!: Task;
    @Output() updateStatus = new EventEmitter<'Pending' | 'In Progress' | 'Completed'>();
    @Output() deleteTask = new EventEmitter<void>();

    updateTaskStatus(status: 'Pending' | 'In Progress' | 'Completed') {
      this.updateStatus.emit(status);
    }

    deleteTaskAction(){
      this.deleteTask.emit();
    }
}
