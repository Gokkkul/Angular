import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  // @Input() item = 0;
  // @Input() item: {name: string, email: string} = {name: '', email: ''};
}
