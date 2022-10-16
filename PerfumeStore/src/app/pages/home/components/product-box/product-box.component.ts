import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../../models/product.model";

@Component({
  selector: 'app-product-box',
  templateUrl: 'product-box.component.html'
})
export class ProductBoxComponent implements OnInit {

  // If customer selects the 1 product per row option, set fullWidthMode to true as input, and change the layout
  // of the product to take more space horizontally
  @Input() fullWidthMode = false;

  product: Product | undefined = {
    id: 1,
    title: "Nike Air Max 97",
    price: 250,
    category: "Shoes",
    description: "Fliest mfs out there",
    image: "https://via.placeholder.com/150"
  }

  @Output() addToCart = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
