import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterHomeComponent } from './register-home/register-home.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RegisterParticularInscriptionComponent } from './register-particular-inscription/register-particular-inscription.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ReactiveFormsModule } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ModuleAuthentificationModule } from '../module-authentification.module';
import { ModalsModule } from 'src/app/shared/modals/modals.module';

@NgModule({
  declarations: [RegisterHomeComponent, RegisterParticularInscriptionComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ModuleAuthentificationModule,
    ModalsModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    NzIconModule,
    NzModalModule,
    NzSelectModule,
  ],
})
export class RegisterModule {}
