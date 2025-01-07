import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterHomeComponent } from './register-home/register-home.component';
import { RegisterParticularInscriptionComponent } from './register-particular-inscription/register-particular-inscription.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: RegisterHomeComponent,
  },
  {
    path: 'new-organisation',
    component: RegisterParticularInscriptionComponent,
  },
  {
    path: 'entreprise',
    loadChildren: () =>
      import('./entreprise-register/entreprise-register.module').then(
        (et) => et.EntrepriseRegisterModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRoutingModule {}
