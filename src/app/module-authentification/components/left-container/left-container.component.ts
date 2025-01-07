import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-left-container',
  templateUrl: './left-container.component.html',
  styleUrls: ['./left-container.component.less'],
})
export class LeftContainerComponent {
  @Input('imgSrc') imgSrc: string = '';
  @Input('title') title: string = '';
}
