import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-generic-table',
  standalone: false,
  
  templateUrl: './generic-table.component.html',
  styleUrl: './generic-table.component.css'
})
export class GenericTableComponent<T> {
  // @Input() tableData: { [key: string]: any }[] = [];
  // @Input() tableColumns: string[] = [];

  @Input() data:T[] = [];
  @Input() columns: {key: keyof T, label: string }[] = []

}
