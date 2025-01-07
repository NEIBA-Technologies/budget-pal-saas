import {Component, OnInit} from '@angular/core';
import {DEFAULT_CATEGORIES} from '../data';
import {FormBuilder, FormControl, FormGroup, Validators,} from '@angular/forms';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {NzModalRef} from 'ng-zorro-antd/modal';
import {NzMessageService} from 'ng-zorro-antd/message';
import {NzUploadChangeParam} from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.less']
})
export class CreateCategoryComponent implements OnInit {
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

  constructor(private _modalRef: NzModalRef, private _fb: FormBuilder, private msg: NzMessageService) {
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
