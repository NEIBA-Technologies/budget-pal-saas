import {Component, OnInit} from '@angular/core';
import {DEFAULT_CATEGORIES} from '../data';
import {NzModalRef} from 'ng-zorro-antd/modal';
import {FormBuilder, FormControl, FormGroup, Validators,} from '@angular/forms';
import {AngularEditorConfig} from '@kolkov/angular-editor';

@Component({
  selector: 'app-modal-expense',
  templateUrl: './modal-expense.component.html',
  styleUrls: ['./modal-expense.component.less'],
})
export class ModalExpenseComponent implements OnInit {
  availableCategorie = DEFAULT_CATEGORIES;
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      {class: 'arial', name: 'Arial'},
      {class: 'times-new-roman', name: 'Times New Roman'},
      {class: 'calibri', name: 'Calibri'},
      {class: 'comic-sans-ms', name: 'Comic Sans MS'},
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

  currentStep: number = 1;
  selectedCategorieId: number | null = null;
  form: FormGroup;

  constructor(private _modalRef: NzModalRef, private _fb: FormBuilder) {
    this.form = this._fb.group({
      name: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
      description: new FormControl(null, []),
    });
  }

  ngOnInit(): void {
  }

  onClose() {
    this._modalRef.close({
      canContinue: false,
    });
  }

  selectOneCat(id: number) {
    this.selectedCategorieId = id;
  }

  onSubmit() {
    if (this.currentStep < 2) {
      this.currentStep = this.currentStep + 1;
    } else {
      const formRaw = this.form.getRawValue();
      const dataSend = {
        ...formRaw,
        selectedCategorieId: this.selectedCategorieId,
      };

      console.log(dataSend);
      this._modalRef.close({
        canContinue: true,
        data: dataSend,
      });
    }
  }
}
