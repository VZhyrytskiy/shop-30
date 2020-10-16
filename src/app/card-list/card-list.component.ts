import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  getBuyList() {
    return this.cartService.getBuyList();
  }

  onConfirm() {
    console.log('Вы купили:');
    for (const product of this.cartService.getBuyList()) {
      console.log(product);
    }
    console.log('Чистим корзину)');
    this.cartService.cleanCart();
  }

}
