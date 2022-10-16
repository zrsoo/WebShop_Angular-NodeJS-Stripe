import {Component, OnDestroy, OnInit} from '@angular/core';
import {Product} from "../../models/product.model";
import {CartService} from "../../services/cart.service";
import {Subscription} from "rxjs";
import {StoreService} from "../../services/store.service";

// 1 column -> row height = 400
// 3 columns -> row height = 335
// 4 columns -> row height = 350
const ROW_HEIGHT : {[id: number]: number} = {1: 330, 3 : 350, 4: 350};

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})

// OnDestroy to prevent memory leaks
export class HomeComponent implements OnInit, OnDestroy {

  columns = 3;
  category: string | undefined;
  rowHeight = ROW_HEIGHT[this.columns];

  products: Array<Product> | undefined;
  sort: string = 'desc';
  count: string = '12';
  productSubscription: Subscription | undefined;

  constructor(private cartService: CartService, private storeService: StoreService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    // Prevent memory leaks
    this.productSubscription = this.storeService.getAllProducts(this.count, this.sort)
        .subscribe((products) => this.products = products);
  }

  changeSort(newSort: string): void {
    this.sort = newSort;
    this.getProducts();
  }

  changeCount(newCount: string) : void {
    this.count = newCount;
    this.getProducts();
  }

  onColumnsCountChange(columnsNumber : number) : void {
    this.columns = columnsNumber;
    this.rowHeight = ROW_HEIGHT[this.columns];
  }

  onShowCategory(newCategory: string) : void {
    this.category = newCategory;
  }

  onAddToCart(product: Product) : void {
    this.cartService.addToCart({
      id: product.id,
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1
    });
  }

  ngOnDestroy(): void {
    // On destroy, unsubscribe in order to prevent memory leaks
    if(this.productSubscription)
    {
      this.productSubscription.unsubscribe();
    }
  }
}
