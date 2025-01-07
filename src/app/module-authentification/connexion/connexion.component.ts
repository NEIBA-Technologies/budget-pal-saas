import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { mapping } from 'src/app/core/mapping-routing';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.less'],
})
export class ConnexionComponent {
  constructor(private _router: Router) {}

  goReset() {
    this._router.navigate([mapping.forgotPasswordVerification]);
  }
  goRegister() {
    this._router.navigate([mapping.registerAccount]);
  }

  onLogin() {
    this._router.navigate([mapping.administrators.budgetPalList]);

  }
}
