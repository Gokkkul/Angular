import { Component } from '@angular/core';
import {  Router, Event } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router: Router){
    // this.router.events.subscribe((event: Event) => {
      
    // })

    
  }
}
