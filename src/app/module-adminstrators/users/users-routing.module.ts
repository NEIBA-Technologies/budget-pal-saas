import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from './list/list.component';
import {CreateComponent} from './create/create.component';
import { EditComponentComponent } from './components/edit-component/edit-component.component';
import { EditComponent } from './edit/edit.component';

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
            breadcrumb: "Liste des administrateurs"
        }
    },
    {
        path: 'create',
        component: CreateComponent,
        data: {
            breadcrumb: "Enregistrement d'un administrateur"
        }
    },
    {
        path: 'edit',
        component: EditComponent,
        data: {
            breadcrumb: "Editer un administrateur"
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule {
}
