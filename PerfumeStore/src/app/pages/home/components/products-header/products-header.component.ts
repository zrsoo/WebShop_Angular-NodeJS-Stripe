import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: 'products-header.component.html'
})
export class ProductsHeaderComponent implements OnInit {

  // Send data outside this component to parent components
  // Number of columns to display, based on layout
  @Output() columnsCountChange = new EventEmitter<number>();

  sort = 'descending';
  itemsShowCount = 12;

  @Output() sortEmitter = new EventEmitter<string>();
  @Output() itemsShowCountEmitter = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSortUpdated(newSort : string) : void {
    this.sort = newSort;

    if(this.sort == 'ascending')
      this.sortEmitter.emit('asc');
    else
      this.sortEmitter.emit('desc');
  }

  onItemsUpdated(count : number) : void {
    this.itemsShowCount = count;
    this.itemsShowCountEmitter.emit(this.itemsShowCount.toString());
  }

  onColumnsUpdated(columnsNumber : number) : void {
    this.columnsCountChange.emit(columnsNumber);
  }
}
