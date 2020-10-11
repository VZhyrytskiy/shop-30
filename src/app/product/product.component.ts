import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../model/category.enum';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()  product: Product;

  getTextCategory(id:number) {
      
    return Category[id];
  }


}
