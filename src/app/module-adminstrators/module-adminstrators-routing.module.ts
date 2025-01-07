import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "dashboard",
    },
    {
        path: "dashboard",
        component: DashboardComponent,
        data: {
            breadcrumb: "Tableau de bord"
        }
    },
    {
        path: "users",
        data: {
            breadcrumb: "Gestion des administrateurs"
        },
        loadChildren: () => import('./users/users.module').then(x => x.UsersModule),
    },
    {
        path: "employe",
        data: {
            breadcrumb: "Gestion des employés"
        },
        loadChildren: () => import('./emplyees/emplyees.module').then(x => x.EmplyeesModule),

    },
    {
        path: "noteFrais",
        data: {
            breadcrumb: "Notes de frais"
        },
        loadChildren: () => import('./note-frais/note-frais.module').then(x => x.NoteFraisModule),
    },
    {
        path: "comptes",
        data: {
            breadcrumb: "Gestion des comptes"
        },
        loadChildren: () => import('./comptes/comptes.module').then(x => x.ComptesModule),
    },
    {
        path: "profil",
       
        loadChildren: () => import('./profil/profil.module').then(x => x.ProfilModule),
    },
    {
        path: "permissions",
        
        loadChildren: () => import('./permissions/permissions.module').then(x => x.PermissionsModule),
    },
    {
        path: '**',
        redirectTo: 'dashboard',
        pathMatch: 'prefix',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ModuleAdminstratorsRoutingModule {
}
