import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ExpenseReportRoutingModule} from './expense-report-routing.module';
import {ExpenseReportListComponent} from './expense-report-list/expense-report-list.component';
import {ExpenseReportCreateComponent} from './expense-report-create/expense-report-create.component';
import {ExpenseReportEditComponent} from './expense-report-edit/expense-report-edit.component';

import {NzTableModule} from 'ng-zorro-antd/table';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzFormModule} from 'ng-zorro-antd/form';
import {ReactiveFormsModule} from '@angular/forms';
import {AngularEditorModule} from '@kolkov/angular-editor';
import {ModalExpenseComponent} from './components/modal-expense/modal-expense.component';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzDrawerModule} from 'ng-zorro-antd/drawer';
import {
  LinkedExpensesOnCreateComponent
} from './components/linked-expenses-on-create/linked-expenses-on-create.component';


@NgModule({
  declarations: [
    ExpenseReportListComponent,
    ExpenseReportCreateComponent,
    ExpenseReportEditComponent,
    ModalExpenseComponent,
    LinkedExpensesOnCreateComponent,
  ],
  imports: [
    CommonModule,
    ExpenseReportRoutingModule,
    NzTableModule,
    NzButtonModule,
    NzInputModule,
    NzIconModule,
    NzGridModule,
    NzFormModule,
    ReactiveFormsModule,
    AngularEditorModule,
    NzModalModule,
    NzDrawerModule
  ],
})
export class ExpenseReportModule {
}
