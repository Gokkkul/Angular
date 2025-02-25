import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() msgFromParent = "";
  @Output() msg = new EventEmitter();

  getMessage(){
    this.msg.emit('Hello From Child');
  }

}
