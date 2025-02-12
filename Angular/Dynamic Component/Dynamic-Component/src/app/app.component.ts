import { Component, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { DynamicComponent } from './dynamic/dynamic.component';
import { DynamicHostDirective } from './dynamic-host.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Dynamic-Component';
  @ViewChild(DynamicHostDirective, { static: true }) dynamicHost: DynamicHostDirective;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

    createDynamicComponent() {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicComponent);
      const viewContainerRef = this.dynamicHost.viewContainerRef;
      viewContainerRef.clear();
      viewContainerRef.createComponent(componentFactory);
    }
}
