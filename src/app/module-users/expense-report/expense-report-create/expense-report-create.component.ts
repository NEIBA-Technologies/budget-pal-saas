import {Component, ViewContainerRef} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators,} from '@angular/forms';
import {Router} from '@angular/router';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {NzDrawerService} from 'ng-zorro-antd/drawer';
import {NzModalService} from 'ng-zorro-antd/modal';
import {
  LinkedExpensesOnCreateComponent
} from '../components/linked-expenses-on-create/linked-expenses-on-create.component';
import {ModalExpenseComponent} from '../components/modal-expense/modal-expense.component';
import {userProfileRouteMap} from "../../../core/mapping-routing";

@Component({
  selector: 'app-expense-report-create',
  templateUrl: './expense-report-create.component.html',
  styleUrls: ['./expense-report-create.component.less'],
})
export class ExpenseReportCreateComponent {
  form: FormGroup;
  expensesList: Array<{
    name: string;
    date: string;
    description: string;
    selectedCategorieId: 2;
  }>;

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

  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private _drawerService: NzDrawerService,
    private _modalService: NzModalService,
    private viewContainerRef: ViewContainerRef
  ) {
    this.expensesList = [];

    this.form = this.fb.group({
      name: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }

  onShowLinkedExpenses() {
    this._drawerService.create<LinkedExpensesOnCreateComponent, {}, string>({
      nzContent: LinkedExpensesOnCreateComponent,
      nzTitle: 'Liste des dépenses liés ',
      nzClosable: true,
      nzCloseOnNavigation: false,
      nzBodyStyle: {padding: 0},
      nzMask: true,
      nzMaskClosable: true,
      nzContentParams: {
        expenses: this.expensesList,
      },
      nzWidth: 800,
    });
  }

  onAddExpense() {
    const modalRef = this._modalService.create<ModalExpenseComponent, any>({
      nzContent: ModalExpenseComponent,
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
      nzBodyStyle: {padding: '0px'},
    });

    modalRef.afterClose.subscribe((result) => {
      if (result.canContinue) {
        this.expensesList.push(result.data);
      }
    });
  }

  onCancel() {
    this._router.navigate([userProfileRouteMap.expenseReport.list]);
  }

  submitForm() {
  }
}
