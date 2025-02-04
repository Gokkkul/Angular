import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'ReactiveFormDemo';

  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    phones: new FormArray([])
  
  })

  onSubmit(form: any){
    console.log(form.value);
    alert("Form submitted");
    form.reset();
  }

}
