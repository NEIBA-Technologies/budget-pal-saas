import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup,} from '@angular/forms';
import {NzDrawerRef} from 'ng-zorro-antd/drawer';
import {CURRENCY} from "../../../../core/constants";
import { NzSelectSizeType } from 'ng-zorro-antd/select';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less']
})
export class CreateComponent implements OnInit {

 

  listOfOption = ['Permission1', 'Permission2', 'Permission 3','Permisions4'];
  listOfSelectedValue = ['Default 01', 'Default 02'];
  defaultOption = [...this.listOfSelectedValue];
  selectedValue = 'Default';


  ngOnInit(): void {
   
  
  }

    form: FormGroup;
    protected readonly CURRENCY = CURRENCY;

    constructor(
        private fb: FormBuilder,
        private _modalRef: NzDrawerRef,
    ) {

        this.form = this.fb.group({
            permission: new FormControl('', []),
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



