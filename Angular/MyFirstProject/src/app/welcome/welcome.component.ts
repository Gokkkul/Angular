import { Component } from '@angular/core';
import { WelcomeMessageService } from '../welcome-message.service';

@Component({
  selector: 'app-welcome',
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  welcomeMessage: string;
  constructor( welcomeMessageService: WelcomeMessageService){
     this.welcomeMessage = welcomeMessageService.displayMessage();
  }
}
