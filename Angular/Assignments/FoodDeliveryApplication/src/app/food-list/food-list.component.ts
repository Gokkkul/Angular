import { Component } from '@angular/core';

interface FoodItems{
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})


export class FoodListComponent {



  foodItems: FoodItems[] = [
    {id: 1, name: 'Idli', price: 50 },
    {id: 2, name: 'Pav Bhaji', price: 80 },
    {id: 3, name: 'Pizza', price: 100 }
  ];

  constructor() {}

}
