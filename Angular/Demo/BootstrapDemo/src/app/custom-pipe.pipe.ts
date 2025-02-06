import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
  standalone: false
})
export class CustomPipePipe implements PipeTransform {

  transform(value: string) {
    
    let lastFour = value.substring(12);
    let firstNumber = "************"
    return firstNumber+lastFour;
    
  }

}
