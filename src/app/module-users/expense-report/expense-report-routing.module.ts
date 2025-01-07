import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExpenseReportListComponent} from './expense-report-list/expense-report-list.component';
import {ExpenseReportCreateComponent} from './expense-report-create/expense-report-create.component';
import {ExpenseReportEditComponent} from './expense-report-edit/expense-report-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ExpenseReportListComponent,
  },
  {
    path: 'create',
    component: ExpenseReportCreateComponent,
  },
  {
    path: 'edit',
    component: ExpenseReportEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpenseReportRoutingModule {
}
