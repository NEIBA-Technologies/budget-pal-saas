import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleWebPortalRoutingModule } from './module-web-portal-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { HomePageHeroSectionComponent } from './components/home-page-hero-section/home-page-hero-section.component';
import { UserAvisItemComponent } from './components/user-avis-item/user-avis-item.component';
import { InformationBlockDetailsComponent } from './components/information-block-details/information-block-details.component';
import { PricePageComponent } from './price-page/price-page.component';
import { PartnerPageComponent } from './partner-page/partner-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { BlockBuySectionComponent } from './components/block-buy-section/block-buy-section.component';
import { ButtonIconComponent } from './components/button-icon/button-icon.component';
import { ButtonTitleComponent } from './components/button-title/button-title.component';
import { SliderSectionComponent } from './components/slider-section/slider-section.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
// import { CarouselModule } from '@marcreichel/angular-carousel';
import { FeaturesPageComponent } from './features-page/features-page.component';
import { ContactComponent } from './contact/contact.component';
import { DetailOneComponent } from './features-page/components/detail-one/detail-one.component';
import { DetailFeaturePageComponent } from './detail-feature-page/detail-feature-page.component';
import { ButtonSimpleComponent } from './components/button-simple/button-simple.component';

@NgModule({
  declarations: [
    HomePageComponent,
    HomePageHeroSectionComponent,
    UserAvisItemComponent,
    InformationBlockDetailsComponent,
    PricePageComponent,
    PartnerPageComponent,
    AboutPageComponent,
    BlockBuySectionComponent,
    ButtonIconComponent,
    ButtonTitleComponent,
    SliderSectionComponent,
    FeaturesPageComponent,
    ContactComponent,
    DetailOneComponent,
    DetailFeaturePageComponent,
    ButtonSimpleComponent,
  ],
  imports: [
    CommonModule,
    ModuleWebPortalRoutingModule,
    NzIconModule,
    // CarouselModule,
  ],
})
export class ModuleWebPortalModule {}
