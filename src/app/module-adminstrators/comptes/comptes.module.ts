import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ComptesRoutingModule} from './comptes-routing.module';
import {ListEntrepriseComponent} from './list-entreprise/list-entreprise.component';
import {ListParticulierComponent} from './list-particulier/list-particulier.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularEditorModule} from '@kolkov/angular-editor';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzDrawerModule} from 'ng-zorro-antd/drawer';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {NzTableModule} from 'ng-zorro-antd/table';
import {AddCompteComponent} from './add-compte/add-compte.component';
import {NzTabsModule} from 'ng-zorro-antd/tabs';
import {PersoCompteComponent} from './components/perso-compte/perso-compte.component';
import {CreateCompteComponent} from './components/create-compte/create-compte.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';


@NgModule({
  declarations: [
    ListEntrepriseComponent,
    ListParticulierComponent,
    AddCompteComponent,
    PersoCompteComponent,
    CreateCompteComponent
  ],
  imports: [
    CommonModule,
    ComptesRoutingModule,
    NzTableModule,
    NzButtonModule,
    NzInputModule,
    NzIconModule,
    NzGridModule,
    NzFormModule,
    ReactiveFormsModule,
    AngularEditorModule,
    NzModalModule,
    NzDrawerModule,
    NzBreadCrumbModule,
    NzSelectModule,
    NzTabsModule,
    NzTableModule,
    NzButtonModule,
    NzInputModule,
    NzIconModule,
    NzGridModule,
    NzFormModule,
    ReactiveFormsModule,
    AngularEditorModule,
    NzModalModule,
    NzDrawerModule,
    NzBreadCrumbModule,
    NzSelectModule,
    NzUploadModule,
    NzSpaceModule,
    ComponentsModule,
    NzPaginationModule,
    NzTagModule,
    NzInputNumberModule,
    NzDatePickerModule,
    FormsModule,
    NzFormModule,
    NzDropDownModule 

  ]
})
export class ComptesModule {
}
