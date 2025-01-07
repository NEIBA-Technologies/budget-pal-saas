import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListEntrepriseComponent} from './list-entreprise/list-entreprise.component';
import {ListParticulierComponent} from './list-particulier/list-particulier.component';
import {AddCompteComponent} from './add-compte/add-compte.component';

const routes: Routes = [
  {
    path: 'list-entreprise',
    component: ListEntrepriseComponent
  },
  {
    path: 'list-particulier',
    component: ListParticulierComponent
  },
  {
    path: 'add-comptes',
    component: AddCompteComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComptesRoutingModule {
}
