import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button-title',
  templateUrl: './button-title.component.html',
  styleUrls: ['./button-title.component.less'],
})
export class ButtonTitleComponent {
  @Input('title') title: string = '';
}
