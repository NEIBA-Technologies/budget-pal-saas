import { Component, ViewContainerRef } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { NzDrawerService } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
import { mapping } from 'src/app/core/mapping-routing';
import { LinkedExpensesOnCreateComponent } from 'src/app/module-users/expense-report/components/linked-expenses-on-create/linked-expenses-on-create.component';
import { ModalCategoryComponent } from '../components/modal-category/modal-category.component';

import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { CURRENCY } from 'src/app/core/constants';
import { DisabledTimeFn, DisabledTimePartial } from 'ng-zorro-antd/date-picker';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.less'],
})
export class CreateComponent {
  form: FormGroup;
  expensesList: Array<{
    name: string;
    date: string;
    description: string;
    montant: number;
    selectedCategorieId: 2;
  }>;

  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '169px',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Saisir le texte ici...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [['bold', 'italic'], ['fontSize']],
  };
  CURRENCY: string = CURRENCY;
  today = new Date();
  timeDefaultValue = new Date().getTime();

  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private _drawerService: NzDrawerService,
    private _modalService: NzModalService,
    private viewContainerRef: ViewContainerRef,
    private msg: NzMessageService
  ) {
    this.expensesList = [];

    this.form = this.fb.group({
      name: new FormControl('', [Validators.required]),
      montant: new FormControl('', [Validators.required]),
      pay: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }

  formatterPercent = (value: number): string => `${value} ${CURRENCY}`;

  onShowLinkedExpenses() {
    this._drawerService.create<LinkedExpensesOnCreateComponent, {}, string>({
      nzContent: LinkedExpensesOnCreateComponent,
      nzTitle: 'Liste des dépenses liés ',
      nzClosable: true,
      nzCloseOnNavigation: false,
      nzBodyStyle: { padding: 0 },
      nzMask: true,
      nzMaskClosable: true,
      nzContentParams: {
        expenses: this.expensesList,
      },
      nzWidth: 800,
    });
  }

  onAddCategory() {
    const modalRef = this._modalService.create<ModalCategoryComponent, any>({
      nzContent: ModalCategoryComponent,
      nzWidth: 800,
      nzViewContainerRef: this.viewContainerRef,
      nzFooter: null,
      nzMaskClosable: false,
      nzTitle: '',
      nzCloseIcon: '',
      nzData: {
        favoriteLibrary: 'angular',
        favoriteFramework: 'angular',
      },
      nzBodyStyle: { padding: '0px' },
    });

    modalRef.afterClose.subscribe((result) => {
      if (result.canContinue) {
        this.expensesList.push(result.data);
      }
    });
  }

  onCancel() {
    this._router.navigate([mapping.administrators.budgetPalList]);
  }

  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      this.msg.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      this.msg.error(`${info.file.name} file upload failed.`);
    }
  }

  submitForm() {}

  range(start: number, end: number): number[] {
    const result: number[] = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }

  disabledDate = (current: Date): boolean =>
    // Can not select days before today and today
    current.getTime() > this.today.getTime();

  disabledDateTime: DisabledTimeFn = () => ({
    nzDisabledHours: () => this.range(0, 24).splice(4, 20),
    nzDisabledMinutes: () => this.range(30, 60),
    nzDisabledSeconds: () => [55, 56],
  });

  disabledRangeTime: DisabledTimeFn = (_value, type?: DisabledTimePartial) => {
    if (type === 'start') {
      return {
        nzDisabledHours: () => this.range(0, 60).splice(4, 20),
        nzDisabledMinutes: () => this.range(30, 60),
        nzDisabledSeconds: () => [55, 56],
      };
    }
    return {
      nzDisabledHours: () => this.range(0, 60).splice(20, 4),
      nzDisabledMinutes: () => this.range(0, 31),
      nzDisabledSeconds: () => [55, 56],
    };
  };
}
