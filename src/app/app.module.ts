import {DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {fr_FR, NZ_I18N} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import fr from '@angular/common/locales/fr';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {NzIconModule} from "ng-zorro-antd/icon";
import {LayoutsModule} from "./layouts/layouts.module";
import {NZ_CONFIG} from "ng-zorro-antd/core/config";
import {ngZorroConfig} from "./core/ngZorroConfig";
import {CURRENCY} from "./core/constants";

registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    LayoutsModule
  ],
  providers: [
    {provide: NZ_I18N, useValue: fr_FR},
    {provide: NZ_CONFIG, useValue: ngZorroConfig},
    {provide: DEFAULT_CURRENCY_CODE, useValue: CURRENCY,},
    {provide: LOCALE_ID, useValue: 'fr-FR'}

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
