import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {PricePageComponent} from './price-page/price-page.component';
import {PartnerPageComponent} from './partner-page/partner-page.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {FeaturesPageComponent} from "./features-page/features-page.component";
import { ContactComponent } from './contact/contact.component';
import { DetailFeaturePageComponent } from './detail-feature-page/detail-feature-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePageComponent,
  },
  {
    path: 'price',
    component: PricePageComponent,
  },
  {
    path: 'partner',
    component: PartnerPageComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'about-us',
    component: AboutPageComponent,
  },
  {
    path: 'features',
    component: FeaturesPageComponent,
  },
  {
    path: 'features-details',
    component: DetailFeaturePageComponent,
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModuleWebPortalRoutingModule {
}
