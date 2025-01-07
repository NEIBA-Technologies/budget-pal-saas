import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { mapping } from 'src/app/core/mapping-routing';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.less'],
})
export class VerificationComponent {
  constructor(private _router: Router) {}

  goCode() {
    this._router.navigate([mapping.forgotPasswordResetCode]);
  }
}
