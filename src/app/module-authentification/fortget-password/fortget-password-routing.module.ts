import { DefineNewPasswordComponent } from './define-new-password/define-new-password.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VerificationComponent } from './verification/verification.component';
import { ResetCodeComponent } from './reset-code/reset-code.component';

const routes: Routes = [
  {
    path: 'verification',
    component: VerificationComponent,
  },
  {
    path: 'reset-code',
    component: ResetCodeComponent,
  },
  {
    path: 'new-password',
    component: DefineNewPasswordComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FortgetPasswordRoutingModule {}
