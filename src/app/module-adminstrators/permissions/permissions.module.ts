import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermissionsRoutingModule } from './permissions-routing.module';
import { ListComponent } from './list/list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { ComponentsModule } from 'src/app/shared/components/components.module';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    PermissionsRoutingModule,
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
    FormsModule
  ]
})
export class PermissionsModule { }
