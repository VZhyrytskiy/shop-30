import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  products = new Array<Product>()

  constructor() { }

  getBuyList(){
    return this.products;
  }

  addToBuyList(product: Product){
    this.products.push(product);
  }

  cleanCart(){
    this.products = new Array<Product>()
  }
}
