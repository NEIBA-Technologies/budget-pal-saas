import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FortgetPasswordRoutingModule } from './fortget-password-routing.module';
import { VerificationComponent } from './verification/verification.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ResetCodeComponent } from './reset-code/reset-code.component';
import { DefineNewPasswordComponent } from './define-new-password/define-new-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModuleAuthentificationModule } from '../module-authentification.module';

@NgModule({
  declarations: [
    VerificationComponent,
    ResetCodeComponent,
    DefineNewPasswordComponent,
  ],
  imports: [
    CommonModule,
    FortgetPasswordRoutingModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    ModuleAuthentificationModule,
  ],
})
export class FortgetPasswordModule {}
