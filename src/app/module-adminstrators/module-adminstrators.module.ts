import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModuleAdminstratorsRoutingModule} from './module-adminstrators-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzCardModule} from 'ng-zorro-antd/card';
import {NzSelectModule} from 'ng-zorro-antd/select';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ModuleAdminstratorsRoutingModule,
    NzIconModule,
    NzLayoutModule,
    NzMenuModule,
    NzCardModule,
    NzSelectModule
  ]
})
export class ModuleAdminstratorsModule {
}
