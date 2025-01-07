import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { mapping } from 'src/app/core/mapping-routing';
import {ConfirmModalComponent} from "../../../shared/modals/confirm-modal/confirm-modal.component";

@Component({
  selector: 'app-register-particular-inscription',
  templateUrl: './register-particular-inscription.component.html',
  styleUrls: ['./register-particular-inscription.component.less'],
})
export class RegisterParticularInscriptionComponent {
  currentStep: number = 1;
  form: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _modalService: NzModalService,
    private _router: Router
  ) {
    this.form = this._fb.group({
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required]),
    });
  }

  onSend() {
    if (this.currentStep < 2) {
      this.currentStep = this.currentStep + 1;
      return;
    }
    this.onSuccessModal();
  }

  goBack() {
    this._router.navigate([mapping.registerAccount]);
  }

  onSuccessModal() {
    const modalRef = this._modalService.create<ConfirmModalComponent, any>({
      nzContent: ConfirmModalComponent,
      nzWidth: 400,
      nzFooter: null,
      nzMaskClosable: false,
      nzTitle: '',
      nzCloseIcon: '',
      nzData: {
        favoriteLibrary: 'angular',
        favoriteFramework: 'angular',
        title: 'Félicitation',
        description: 'Hello',
      },
      nzBodyStyle: { padding: '0px' },
    });

    modalRef.afterClose.subscribe((result) => {
      if (result.canContinue) {
      }
    });
  }
}
