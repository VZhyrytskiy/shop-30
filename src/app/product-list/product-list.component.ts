import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductsService, private cartService: CartService) { }

  ngOnInit(): void { }

  getProducts(){
    return this.productService.getProducts();
  }

  onBuy(product: Product) {
      this.cartService.addToBuyList(product);
  }


}
