import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: 'filters.component.html'
})
export class FiltersComponent implements OnInit {
  categories = ['shoes', 'pants'];

  @Output() showCategory = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onShowCategory(category: string) : void {
    this.showCategory.emit(category);
  }
}
