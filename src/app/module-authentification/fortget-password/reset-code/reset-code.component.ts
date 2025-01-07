import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { mapping } from 'src/app/core/mapping-routing';

@Component({
  selector: 'app-reset-code',
  templateUrl: './reset-code.component.html',
  styleUrls: ['./reset-code.component.less'],
})
export class ResetCodeComponent {
  constructor(private _router: Router) {}

  goDefineNewPassword() {
    this._router.navigate([mapping.forgotPasswordDefineNewPassword]);
  }
}
