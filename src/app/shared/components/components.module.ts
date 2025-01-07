import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChipComponent} from "./chip/chip.component";
import {NzIconModule} from "ng-zorro-antd/icon";


@NgModule({
  declarations: [ChipComponent],
  exports: [ChipComponent],
  imports: [
    CommonModule,
    NzIconModule
  ]
})
export class ComponentsModule {
}
