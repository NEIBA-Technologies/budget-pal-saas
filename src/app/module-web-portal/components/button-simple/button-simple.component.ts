import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-simple',
  templateUrl: './button-simple.component.html',
  styleUrls: ['./button-simple.component.less']
})
export class ButtonSimpleComponent {

  @Input('title') title: string | null = null;
  @Input('linkDestination') linkDestination: string | null = null;
  @Input('bgColor') bgColor: 'primary-acent'| null = null;
}
