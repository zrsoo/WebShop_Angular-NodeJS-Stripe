import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Cart, CartItem} from "../models/cart.model";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart = new BehaviorSubject<Cart>({items: []});

  // MatSnackBar displays information to the user;
  constructor(private _snackBar: MatSnackBar) { }

  addToCart(itemReceived: CartItem): void {
    // Create new items array containing the values in the current cart
    const items = [...this.cart.value.items];

    // Check if item already exists in the cart
    const itemInCart = items.find((item) => item.id == itemReceived.id);

    // If the item does not exist in the cart array, add it to cart, else, increase quantity
    if(itemInCart == undefined)
    {
      items.push(itemReceived);
    }
    else
    {
      itemInCart.quantity++;
    }

    this.cart.next({ items });

    // Pop-up
    // First arg = text on pop-up
    // Second arg = text on button
    // Third arg = duration (in miliseconds)
    this._snackBar.open('1 item added to cart', 'Ok', {duration: 3000});

    console.log(this.cart.value);
  }
}
