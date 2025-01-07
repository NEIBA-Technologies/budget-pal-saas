import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user-avis-item',
  templateUrl: './user-avis-item.component.html',
  styleUrls: ['./user-avis-item.component.less'],
})
export class UserAvisItemComponent {
  @Input('position') position: string | null = null;
}
