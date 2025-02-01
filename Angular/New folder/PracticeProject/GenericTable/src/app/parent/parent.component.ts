import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponentDirective } from '../dynamic-component.directive';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: false,
  
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  @ViewChild(DynamicComponentDirective, {static: true}) dynamicHost!: DynamicComponentDirective;

  loadComponent(){
    const viewContainerRef: ViewContainerRef = this.dynamicHost.viewContainerRef;

    viewContainerRef.clear();

    viewContainerRef.createComponent(ChildComponent);
    
  }

  clearComponet(){
    this.dynamicHost.viewContainerRef.clear()
  }

}
