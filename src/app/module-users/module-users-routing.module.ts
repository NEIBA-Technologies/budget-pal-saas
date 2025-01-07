import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'expenses-report',
    loadChildren: () =>
      import('./expense-report/expense-report.module').then(
        (er) => er.ExpenseReportModule
      ),
  },
  {
    path: '**',
    redirectTo: 'expenses-report',
    pathMatch: 'prefix',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleUsersRoutingModule {
}
