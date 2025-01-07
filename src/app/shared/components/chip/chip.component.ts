import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent {

  @Input('nzIcon') icon: string = "";
  @Input('showLabel') showLabel: boolean = true;
  @Input('nzLabel') label: string | undefined;
  @Input('shape') shape: 'default' | 'circle' = "default";
  @Input('type') color: 'dark' | 'primary' | 'danger' | 'default' | "warning-acent" = "default";
}
