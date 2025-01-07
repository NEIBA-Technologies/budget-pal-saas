import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntrepriseRegisterRoutingModule } from './entreprise-register-routing.module';
import { RegisterWithCodeComponent } from './register-with-code/register-with-code.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ModuleAuthentificationModule } from '../../module-authentification.module';

@NgModule({
  declarations: [RegisterWithCodeComponent],
  imports: [
    CommonModule,
    EntrepriseRegisterRoutingModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    NzIconModule,
    NzModalModule,
    NzSelectModule,
    ModuleAuthentificationModule,
  ],
})
export class EntrepriseRegisterModule {}
