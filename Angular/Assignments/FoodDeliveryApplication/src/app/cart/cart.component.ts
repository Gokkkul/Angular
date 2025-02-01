import { Component} from '@angular/core';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent{
  cartItems: any[] = [];
  total: number = 0;
  

  constructor(private cartService: CartServiceService) {
  //  this.total= cartService.totalPrice();
  
  }
  

}

