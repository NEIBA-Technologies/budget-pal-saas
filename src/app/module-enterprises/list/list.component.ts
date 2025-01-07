import {Component, ViewContainerRef} from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
  ɵElement
} from '@angular/forms';
import {Router} from '@angular/router';
import {mapping} from 'src/app/core/mapping-routing';
import {Observable, Observer} from "rxjs";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent {
  checked = false;
  loading = false;
  indeterminate = false;
  listOfData: readonly any[] = [];
  listOfCurrentPageData: readonly any[] = [];
  noteFraisListing: readonly any[] = [
    {
      id: '1',
      noteFrais: 'Septembre 2023',
      nbDepenses: '1',
      montant: '10 000 FCFA',
      statut: 'En cours',

    },
    {
      id: '2',
      noteFrais: 'Septembre 2023',
      nbDepenses: '1',
      montant: '10 000 FCFA',
      statut: 'En cours',
    },
    {
      id: '3',
      noteFrais: 'Septembre 2023',
      nbDepenses: '1',
      montant: '10 000 FCFA',
      statut: 'En cours',
    },
    {
      id: '4',
      noteFrais: 'Septembre 2023',
      nbDepenses: '1',
      montant: '10 000 FCFA',
      statut: 'En cours',
    },

  ];
  setOfCheckedId = new Set<number>();
  expensesList: any;
  validateForm: FormGroup<{
    [K in keyof {
      confirm: (string | ValidatorFn[])[];
      password: (string | ((control: AbstractControl) => (ValidationErrors | null))[])[];
      comment: (string | ((control: AbstractControl) => (ValidationErrors | null))[])[];
      userName: (string | ((control: AbstractControl) => (ValidationErrors | null))[] | AsyncValidatorFn[])[];
      email: (string | ((control: AbstractControl) => (ValidationErrors | null))[])[]
    }]: ɵElement<{
      confirm: (string | ValidatorFn[])[];
      password: (string | ((control: AbstractControl) => (ValidationErrors | null))[])[];
      comment: (string | ((control: AbstractControl) => (ValidationErrors | null))[])[];
      userName: (string | ((control: AbstractControl) => (ValidationErrors | null))[] | AsyncValidatorFn[])[];
      email: (string | ((control: AbstractControl) => (ValidationErrors | null))[])[]
    }[K], null>
  }>;
  /*createCategory() {
    const modalRef = this._modalService.create<CreateCategoryComponent, any>({
      nzContent: CreateCategoryComponent,
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
  }*/
  isVisibleTop = false;
  isVisibleMiddle = false;

  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private viewContainerRef: ViewContainerRef
  ) {
    this.validateForm = this.fb.group({
      userName: ['', [Validators.required], [this.userNameAsyncValidator]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
      confirm: ['', [this.confirmValidator]],
      comment: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onCurrentPageDataChange(listOfCurrentPageData: readonly any[]): void {
    this.listOfCurrentPageData = listOfCurrentPageData;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    const listOfEnabledData = this.listOfCurrentPageData.filter(
      ({disabled}) => !disabled
    );
    this.checked = listOfEnabledData.every(({id}) =>
      this.setOfCheckedId.has(id)
    );
    this.indeterminate =
      listOfEnabledData.some(({id}) => this.setOfCheckedId.has(id)) &&
      !this.checked;
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(checked: boolean): void {
    this.listOfCurrentPageData
      .filter(({disabled}) => !disabled)
      .forEach(({id}) => this.updateCheckedSet(id, checked));
    this.refreshCheckedStatus();
  }

  sendRequest(): void {
    this.loading = true;
    const requestData = this.listOfData.filter((data) =>
      this.setOfCheckedId.has(data.id)
    );
    console.log(requestData);
  }

  submitForm(): void {
    console.log('submit', this.validateForm.value);
  }

  resetForm(e: MouseEvent): void {
    e.preventDefault();
    this.validateForm.reset();
  }

  validateConfirmPassword(): void {
    setTimeout(() => this.validateForm.controls.confirm.updateValueAndValidity());
  }

  /*goCreate() {
    this._router.navigate([mapping.noteFrais.create]);
  }*/

  userNameAsyncValidator: AsyncValidatorFn = (control: AbstractControl) =>
    new Observable((observer: Observer<ValidationErrors | null>) => {
      setTimeout(() => {
        if (control.value === 'JasonWood') {
          // you have to return `{error: true}` to mark it as an error event
          observer.next({error: true, duplicated: true});
        } else {
          observer.next(null);
        }
        observer.complete();
      }, 1000);
    });

  confirmValidator: ValidatorFn = (control: AbstractControl) => {
    if (!control.value) {
      return {error: true, required: true};
    } else if (control.value !== this.validateForm.controls.password.value) {
      return {confirm: true, error: true};
    }
    return {};
  };

  showModalTop(): void {
    this.isVisibleTop = true;
  }

  showModalMiddle(): void {
    this.isVisibleMiddle = true;
  }

  handleOkTop(): void {
    console.log('点击了确定');
    this.isVisibleTop = false;
  }

  handleCancelTop(): void {
    this.isVisibleTop = false;
  }

  handleOkMiddle(): void {
    console.log('Valider');
    this.isVisibleMiddle = false;
  }

  handleCancelMiddle(): void {
    this.isVisibleMiddle = false;
  }

  onAdd() {
    this._router.navigate([mapping.enterprises.budgetPalAdd]);
  }
}
