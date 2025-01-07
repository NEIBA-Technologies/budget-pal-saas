import {Component} from '@angular/core';
import {FormBuilder, FormControl, FormGroup,} from '@angular/forms';
import {NzDrawerRef} from 'ng-zorro-antd/drawer';
import {CURRENCY} from "../../../../core/constants";

@Component({
    selector: 'app-edit-component',
    templateUrl: './edit-component.component.html',
    styleUrls: ['./edit-component.component.less']
})
export class EditComponentComponent {
    form: FormGroup;
    protected readonly CURRENCY = CURRENCY;

    constructor(
        private fb: FormBuilder,
        private _modalRef: NzDrawerRef,
    ) {

        this.form = this.fb.group({
            name: new FormControl('', []),
            date: new FormControl('', []),
            phone: new FormControl('', []),
            email: new FormControl('', []),
            profile: new FormControl('', []),
        });
    }

    onCancel() {
        this._modalRef.close({
            canContinue: false,
        });
    }

    submitForm() {
    }
}


