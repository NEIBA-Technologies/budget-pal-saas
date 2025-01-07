import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NoteFraisRoutingModule} from './note-frais-routing.module';
import {ListComponent} from './list/list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzDrawerModule} from 'ng-zorro-antd/drawer';
import {AngularEditorModule} from '@kolkov/angular-editor';
import {CreateComponent} from './create/create.component';
import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {ModalCategoryComponent} from './components/modal-category/modal-category.component';
import {CreateCategoryComponent} from './components/create-category/create-category.component';
import {NzUploadModule} from 'ng-zorro-antd/upload';
import {NzSpaceModule} from "ng-zorro-antd/space";
import {ComponentsModule} from "../../shared/components/components.module";
import {NzPaginationModule} from "ng-zorro-antd/pagination";
import {NzTagModule} from "ng-zorro-antd/tag";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";


@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    ModalCategoryComponent,
    CreateCategoryComponent,
  ],
  imports: [
    CommonModule,
    NoteFraisRoutingModule,
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
    NzDatePickerModule


  ]
})
export class NoteFraisModule {
}
