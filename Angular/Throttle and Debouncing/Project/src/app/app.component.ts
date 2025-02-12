import { Component } from '@angular/core';
import { fromEvent, throttleTime } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Project';

  constructor(){
    fromEvent(window, 'scroll')
    // .pipe(throttleTime(2000))
    .subscribe(() => console.log('User is scrolling...'))
  }
}
