import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { mapping } from 'src/app/core/mapping-routing';

@Component({
  selector: 'app-register-home',
  templateUrl: './register-home.component.html',
  styleUrls: ['./register-home.component.less'],
})
export class RegisterHomeComponent {
  constructor(private _router: Router) {}

  goNewOrganisation() {
    this._router.navigate([mapping.registerAccountOrganisation]);
  }
  existingAccount() {
    this._router.navigate([mapping.entreprise]);
  }
  goRegister() {
    this._router.navigate([mapping.registerAccount]);
  }
  goConnect() {
    this._router.navigate([mapping.signIn]);
  }
}
