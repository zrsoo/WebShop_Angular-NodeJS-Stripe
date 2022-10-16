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

  @Output() sortChange = new EventEmitter<string>();
  @Output() itemsShowCountChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onSortUpdated(newSort : string) : void {
    this.sort = newSort;

    if(this.sort == 'ascending')
      this.sortChange.emit('asc');
    else
      this.sortChange.emit('desc');
  }

  onItemsUpdated(count : number) : void {
    this.itemsShowCount = count;
    this.itemsShowCountChange.emit(this.itemsShowCount.toString());
  }

  onColumnsUpdated(columnsNumber : number) : void {
    this.columnsCountChange.emit(columnsNumber);
  }
}
