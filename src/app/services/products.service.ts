import { Injectable } from '@angular/core';
import { Category } from '../model/category.enum';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(){
    let products = new Array<Product>();

    let macBook = new Product;
    macBook.category = Category.Notepads;
    macBook.name = 'MacBook Pro 2020';
    macBook.description = 'Новое чудо техники, ноутбук на базе ARM нового 7-нм процессора';
    macBook.price = 3500;
    macBook.isAvailable = true;

    let iPhone = new Product;
    iPhone.category = Category.Smartfones;
    iPhone.name = 'iPhone 12 Pro Max';
    iPhone.description = 'Еще быстрее процессор, еще лучше камеры'
    iPhone.price = 1500;
    iPhone.isAvailable = true;

    let airPods = new Product;
    airPods.category = Category.Accesories;
    airPods.name = 'airPods Pro';
    airPods.description = 'наушники с функцией активного шумопадавления';
    airPods.price = 300;
    airPods.isAvailable = true;

    products.push(macBook,iPhone,airPods);

    return products;
  }
}
