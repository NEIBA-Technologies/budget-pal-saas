import {Component, Input, OnInit} from '@angular/core';
import {NzDrawerService} from 'ng-zorro-antd/drawer';
import {DEFAULT_CATEGORIES} from '../data';

@Component({
  selector: 'app-linked-expenses-on-create',
  templateUrl: './linked-expenses-on-create.component.html',
  styleUrls: ['./linked-expenses-on-create.component.less'],
})
export class LinkedExpensesOnCreateComponent implements OnInit {
  @Input('expenses') expenses: any;

  constructor(private _drawerRef: NzDrawerService) {
  }

  ngOnInit(): void {
    console.log('expenses from drawer');
    console.log(this.expenses);
  }

  remove(name: string) {
    const result = this.expenses.filter((item: any) => {
      return item.name !== name;
    });

    this.expenses = result;
  }


  getCategorie(id: number) {
    const cat = DEFAULT_CATEGORIES.find((item) => {
      return item.id === id;
    });

    return cat?.title;
  }
}
