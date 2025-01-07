import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {ListComponent} from './list/list.component';
import {CreateComponent} from './create/create.component';
import {ReactiveFormsModule} from '@angular/forms';
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
import {EditComponentComponent} from './components/edit-component/edit-component.component';
import {ComponentsModule} from "../../shared/components/components.module";
import {NzPaginationModule} from "ng-zorro-antd/pagination";
import {NzSpaceModule} from "ng-zorro-antd/space";
import {NzTagModule} from "ng-zorro-antd/tag";
import {NzDatePickerModule} from "ng-zorro-antd/date-picker";
import {NzUploadModule} from "ng-zorro-antd/upload";
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    EditComponentComponent,
    EditComponent
  ],
    imports: [
        CommonModule,
        UsersRoutingModule,
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
        ComponentsModule,
        NzPaginationModule,
        NzSpaceModule,
        NzTagModule,
        NzDatePickerModule,
        NzUploadModule,
    ]
})
export class UsersModule {
}
