import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button-icon',
  templateUrl: './button-icon.component.html',
  styleUrls: ['./button-icon.component.less'],
})
export class ButtonIconComponent {
  @Input('title') title: string | null = null;
  @Input('linkDestination') linkDestination: string | null = null;
  @Input('bgColor') bgColor: 'primary-acent'| null = null;
}
