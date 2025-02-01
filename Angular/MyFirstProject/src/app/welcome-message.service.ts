import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeMessageService {

  constructor() { }

  displayMessage(): string {
    return `Welcome to the Website...`
  }
}
