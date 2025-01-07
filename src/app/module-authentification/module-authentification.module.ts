import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleAuthentificationRoutingModule } from './module-authentification-routing.module';
import { ConnexionComponent } from './connexion/connexion.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { LeftContainerComponent } from './components/left-container/left-container.component';

@NgModule({
  declarations: [ConnexionComponent, LeftContainerComponent],
  imports: [
    CommonModule,
    ModuleAuthentificationRoutingModule,
    NzFormModule,
    NzInputModule,
    NzCheckboxModule,
    NzButtonModule,
  ],
  exports: [LeftContainerComponent],
})
export class ModuleAuthentificationModule {}
