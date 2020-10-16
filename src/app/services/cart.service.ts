import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products = new Array<Product>();

  constructor() { }

  getBuyList(){
    return this.products;
  }

  addToBuyList(product: Product){
    // тут мутация данных
    this.products.push(product);
  }

  cleanCart(){
    // а тут новая ссылка, желательно придерживаться одного подхода
    this.products = new Array<Product>();
  }
}
