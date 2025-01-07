import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './list/list.component';
import {AddComponent} from './add/add.component';
import {AddAccountComponent} from './add-account/add-account.component';
import {ListAccountComponent} from './list-account/list-account.component';
import {RepaymentComponent} from "./repayment/repayment.component";
import {LinkComponent} from "./link/link.component";

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'add',
    component: AddComponent,
  },
  {
    path: 'listAccount',
    component: ListAccountComponent,
  },
  {
    path: 'addAccount',
    component: AddAccountComponent
  },
  {
    path: 'repayment',
    component: RepaymentComponent,
  },
  {
    path: 'link',
    component: LinkComponent,
  },
  {
    path: '**',
    redirectTo: 'list',
    pathMatch: 'prefix',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleEnterprisesRoutingModule {
}
