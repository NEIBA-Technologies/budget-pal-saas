import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutAdminstratorsComponent} from './layout-adminstrators/layout-adminstrators.component';
import {LayoutAuthentificationComponent} from './layout-authentification/layout-authentification.component';
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {RouterLink, RouterModule, RouterOutlet} from "@angular/router";
import {LayoutEnterpriseComponent} from './layout-enterprise/layout-enterprise.component';
import {LayoutUserComponent} from './layout-user/layout-user.component';
import {LayoutPortalComponent} from './layout-portal/layout-portal.component';
import {PortalHeaderComponent} from './layout-portal/components/portal-header/portal-header.component';
import {PortalFooterComponent} from './layout-portal/components/portal-footer/portal-footer.component';
import {NzDrawerModule} from "ng-zorro-antd/drawer";
import { ItemMenuComponent } from './layout-portal/components/item-menu/item-menu.component';
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";


@NgModule({
  declarations: [
    LayoutAdminstratorsComponent,
    LayoutAuthentificationComponent,
    LayoutEnterpriseComponent,
    LayoutUserComponent,
    LayoutPortalComponent,
    PortalHeaderComponent,
    PortalFooterComponent,
    ItemMenuComponent
  ],
    imports: [
        CommonModule,
        NzIconModule,
        NzLayoutModule,
        NzMenuModule,
        RouterLink,
        RouterOutlet,
        RouterModule,
        NzDrawerModule,
        NzBreadCrumbModule
    ]
})
export class LayoutsModule {
}
