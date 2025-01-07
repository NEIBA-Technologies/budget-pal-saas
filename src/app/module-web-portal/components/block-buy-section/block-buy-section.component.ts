import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-block-buy-section',
  templateUrl: './block-buy-section.component.html',
  styleUrls: ['./block-buy-section.component.less'],
})
export class BlockBuySectionComponent {
  @Input('title') title: string | null = null;
  @Input('titleButton') titleButton: string | null = 'Acheter';
  @Input('description') description: string | null = null;
  @Input('linkDestination') linkDestination: string | null = '/portal/price';
}
