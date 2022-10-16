import { Component, OnInit } from '@angular/core';
import {Cart, CartItem} from "../../models/cart.model";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.component.html'
})
export class CartComponent implements OnInit {

  cart: Cart = {items: [
      {
      id: 1,
      product: 'https://via.placeholder.com/150',
      name: 'Nike Air 999',
      price: 1000000,
      quantity: 2
      },
      {
        id: 2,
        product: 'https://via.placeholder.com/150',
        name: 'Calbin Klein Jmek',
        price: 100000000,
        quantity: 1
      },
      {
        id: 3,
        product: 'https://via.placeholder.com/150',
        name: 'Adidas Muye',
        price: 100002,
        quantity: 2
      },
      {
        id: 4,
        product: 'https://via.placeholder.com/150',
        name: 'Nike Air 99',
        price: 1000,
        quantity: 5
      },
      {
        id: 5,
        product: 'https://via.placeholder.com/150',
        name: 'Ceas No Fake',
        price: 1000432400,
        quantity: 1
      }
    ]};

  dataSource: Array<CartItem> = [];

  displayedColumns : Array<string> = [
      'product',
      'name',
      'price',
      'quantity',
      'total',
      'action'
  ];

  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }

  getTotal(items : Array<CartItem>) : number {
      return this._cartService.getTotal(items);
  }

  getTotalForProduct(item : CartItem) : number {
      return item.price * item.quantity;
  }
}
