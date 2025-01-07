import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterWithCodeComponent } from './register-with-code/register-with-code.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterWithCodeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntrepriseRegisterRoutingModule {}
