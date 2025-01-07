import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sign-in',
  },
  {
    path: 'sign-in',
    component: ConnexionComponent,
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./fortget-password/fortget-password.module').then(
        (fg) => fg.FortgetPasswordModule
      ),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./register/register.module').then((mi) => mi.RegisterModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleAuthentificationRoutingModule {}
