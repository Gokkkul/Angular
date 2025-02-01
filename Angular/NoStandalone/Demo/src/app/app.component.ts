import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  // title = 'Demo';

  // receivedData: string = '';

  // receiveData(data: string){
  //   this.receivedData = data;
  // }

  parentData = 'Hello from Parent!';
  receivedData: string = '';

  receiveData(data: string) {
    this.receivedData = data;
  }

  // parentdata = "This is present in parent"
}
