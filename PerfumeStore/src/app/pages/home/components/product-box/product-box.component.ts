import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-box',
  templateUrl: 'product-box.component.html'
})
export class ProductBoxComponent implements OnInit {

  // If customer selects the 1 product per row option, set fullWidthMode to true as input, and change the layout
  // of the product to take more space horizontally
  @Input() fullWidthMode = false;

  constructor() { }

  ngOnInit(): void {
  }

}
