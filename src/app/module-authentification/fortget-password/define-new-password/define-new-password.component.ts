import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { mapping } from 'src/app/core/mapping-routing';

@Component({
  selector: 'app-define-new-password',
  templateUrl: './define-new-password.component.html',
  styleUrls: ['./define-new-password.component.less'],
})
export class DefineNewPasswordComponent {
  form: FormGroup;

  constructor(private _fb: FormBuilder, private _router: Router) {
    this.form = this._fb.group({
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    this._router.navigate([mapping.signIn]);
  }
}
