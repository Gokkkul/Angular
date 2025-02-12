import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'Rating-System';
  rating: number = 0;

  setRate(rate: number){
    this.rating = rate;
  }
}
