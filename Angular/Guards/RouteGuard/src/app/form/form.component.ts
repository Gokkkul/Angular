import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: false,
  
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {


  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.route.data.subscribe(data =>)
  }
}
