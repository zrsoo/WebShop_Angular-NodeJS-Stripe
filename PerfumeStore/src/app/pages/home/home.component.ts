import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {

  columns = 3;
  category: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onColumnsCountChange(columnsNumber : number) : void {
    this.columns = columnsNumber;
  }

  onShowCategory(newCategory: string) : void {
    this.category = newCategory;
  }
}
