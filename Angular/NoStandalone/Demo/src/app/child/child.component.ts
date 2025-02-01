import { Component } from '@angular/core';
import { Input,EventEmitter,Output } from "@angular/core";

@Component({
  selector: 'app-child',
  standalone: false,
  
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  providers: [d]
})
export class ChildComponent {

  @Input() childData: string = '';
  @Output() dataEmitter = new EventEmitter<string>();

  sendData() {
    this.dataEmitter.emit('Data from Child');
  }

  // @Input() data: string ='';
}
