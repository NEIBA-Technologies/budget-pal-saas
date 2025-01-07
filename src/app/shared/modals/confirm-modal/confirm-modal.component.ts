import { Component, Input } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.less'],
})
export class ConfirmModalComponent {
  @Input('title') title: string = 'Félicitation';
  @Input('description') description: string = 'Action éffectuée avec succès';

  constructor(private _modalRef: NzModalRef) {}

  onClose() {
    this._modalRef.close({
      canContinue: false,
    });
  }
}
