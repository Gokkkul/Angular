import { Directive } from '@angular/core';
import { ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamicComponent]',
  standalone: false
})
export class DynamicComponentDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
