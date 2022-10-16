import {Component, Input, OnInit} from '@angular/core';
import {Cart, CartItem} from "../../models/cart.model";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.component.html'
})
export class CartComponent implements OnInit {

  private _cart: Cart = { items: [] };

  displayedColumns : Array<string> = [
      'product',
      'name',
      'price',
      'quantity',
      'total',
      'action'
  ];

  @Input()
  get cart()
  {
      return this._cart;
  }

  set cart(cart: Cart)
  {
      this._cart = cart;
  }

  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
    this._cartService.cart.subscribe((_cart) => {
        this._cart = _cart;
    });
  }

  getTotal(items : Array<CartItem>) : number {
      return this._cartService.getTotal(items);
  }

  getTotalForProduct(item : CartItem) : number {
      return item.price * item.quantity;
  }

  onClearCart() : void {
      this._cartService.clearCart();
  }

  onRemoveItem(cartItem: CartItem) {
      this._cartService.removeItemById(cartItem.id);
  }
}
