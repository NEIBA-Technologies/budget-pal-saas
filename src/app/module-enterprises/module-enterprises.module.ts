import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ModuleEnterprisesRoutingModule} from './module-enterprises-routing.module';
import {HomeComponent} from './home/home.component';
import {ListComponent} from './list/list.component';
import {AddComponent} from './add/add.component';


import {ReactiveFormsModule} from '@angular/forms';
import {NzIconModule} from 'ng-zorro-antd/icon';
import {NzTableModule} from 'ng-zorro-antd/table';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzGridModule} from 'ng-zorro-antd/grid';
import {NzFormModule} from 'ng-zorro-antd/form';
import {NzModalModule} from 'ng-zorro-antd/modal';
import {NzDrawerModule} from 'ng-zorro-antd/drawer';

import {NzBreadCrumbModule} from 'ng-zorro-antd/breadcrumb';
import {NzSelectModule} from 'ng-zorro-antd/select';
import {ListAccountComponent} from './list-account/list-account.component';
import {AddAccountComponent} from './add-account/add-account.component';
import {RepaymentComponent} from './repayment/repayment.component';
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzUploadModule} from "ng-zorro-antd/upload";
import {LinkComponent} from './link/link.component';


@NgModule({
  declarations: [
    HomeComponent,
    ListComponent,
    AddComponent,
    ListAccountComponent,
    AddAccountComponent,
    RepaymentComponent,
    LinkComponent
  ],
  imports: [
    CommonModule,
    ModuleEnterprisesRoutingModule,

    NzTableModule,
    NzButtonModule,
    NzInputModule,
    NzIconModule,
    NzGridModule,
    NzFormModule,
    ReactiveFormsModule,
    NzModalModule,
    NzDrawerModule,
    NzBreadCrumbModule,
    NzSelectModule,
    NzDropDownModule,
    NzUploadModule,
  ]
})
export class ModuleEnterprisesModule {
}
