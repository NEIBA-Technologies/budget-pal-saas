import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LayoutAuthentificationComponent } from "./layouts/layout-authentification/layout-authentification.component";
import { LayoutAdminstratorsComponent } from "./layouts/layout-adminstrators/layout-adminstrators.component";
import { LayoutEnterpriseComponent } from "./layouts/layout-enterprise/layout-enterprise.component";
import { LayoutUserComponent } from "./layouts/layout-user/layout-user.component";
import { LayoutPortalComponent } from "./layouts/layout-portal/layout-portal.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "portal" },
  {
    path: "portal",
    component: LayoutPortalComponent,
    loadChildren: () =>
      import("./module-web-portal/module-web-portal.module").then(
        (wp) => wp.ModuleWebPortalModule
      ),
  },
  {
    path: "authenticate",
    component: LayoutPortalComponent,
    loadChildren: () =>
      import("./module-authentification/module-authentification.module").then(
        (value) => value.ModuleAuthentificationModule
      ),
  },
  {
    path: "administrators",
    component: LayoutAdminstratorsComponent,
    data: {
      breadcrumb: "Administrateurs",
    },
    loadChildren: () =>
      import("./module-adminstrators/module-adminstrators.module").then(
        (value) => value.ModuleAdminstratorsModule
      ),
  },
  {
    path: "enterprises",
    component: LayoutEnterpriseComponent,
    loadChildren: () =>
      import("./module-enterprises/module-enterprises.module").then(
        (value) => value.ModuleEnterprisesModule
      ),
  },
  {
    path: "users",
    component: LayoutUserComponent,
    loadChildren: () =>
      import("./module-users/module-users.module").then(
        (mu) => mu.ModuleUsersModule
      ),
  },
  { path: "**", pathMatch: "full", redirectTo: "portal" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollOffset: () => [0, 0],
      anchorScrolling: "enabled",
      scrollPositionRestoration: "top",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
