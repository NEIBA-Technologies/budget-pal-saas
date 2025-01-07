import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './list/list.component';
import {CreateComponent} from './create/create.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "list",
    pathMatch: "full"
  },
  {
    path: 'list',
    component: ListComponent,
    data: {
      breadcrumb: "Liste des notes de frais"
    },
  },
  {
    path: 'create',
    component: CreateComponent,
    data: {
      breadcrumb: "Nouvelle note de frais"
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoteFraisRoutingModule {
}
