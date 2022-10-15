import { Component, OnInit } from '@angular/core';

// 1 column -> row height = 400
// 3 columns -> row height = 335
// 4 columns -> row height = 350
const ROW_HEIGHT : {[id: number]: number} = {1: 330, 3 : 350, 4: 350};

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {

  columns = 3;
  category: string | undefined;
  rowHeight=  ROW_HEIGHT[this.columns];

  constructor() { }

  ngOnInit(): void {
  }

  onColumnsCountChange(columnsNumber : number) : void {
    this.columns = columnsNumber;
    this.rowHeight = ROW_HEIGHT[this.columns];
  }

  onShowCategory(newCategory: string) : void {
    this.category = newCategory;
  }
}
