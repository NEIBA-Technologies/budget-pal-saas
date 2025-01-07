import {Component, ViewContainerRef} from '@angular/core';
import {FormBuilder,} from '@angular/forms';
import {Router} from '@angular/router';
import {NzDrawerService} from 'ng-zorro-antd/drawer';
import {NzModalService} from 'ng-zorro-antd/modal';
import {mapping} from 'src/app/core/mapping-routing';

@Component({
  selector: 'app-list-particulier',
  templateUrl: './list-particulier.component.html',
  styleUrls: ['./list-particulier.component.less']
})
export class ListParticulierComponent {
  checked = false;
  loading = false;
  indeterminate = false;
  listOfData: readonly any[] = [];
  listOfCurrentPageData: readonly any[] = [];
  noteFraisListing: readonly any[] = [
    {
      id: '1',
      admin: 'Jhon Doe',
      name: 'Blommfiel',
      phone: '09 78 65 45 78',
      email: 'blomm@gmail.com',

    },
    {
      id: '2',
      admin: 'Jhon Doe',
      name: 'Blommfiel',
      phone: '09 78 65 45 78',
      email: 'blomm@gmail.com',
    },
    {
      id: '3',
      admin: 'Jhon Doe',
      name: 'Blommfiel',
      phone: '09 78 65 45 78',
      email: 'blomm@gmail.com',
    },
    {
      id: '4',
      admin: 'Jhon Doe',
      name: 'Blommfiel',
      phone: '09 78 65 45 78',
      email: 'blomm@gmail.com',
    },

  ];
  setOfCheckedId = new Set<number>();
  expensesList: any;

  constructor(
    private fb: FormBuilder,
    private _router: Router,
    private _drawerService: NzDrawerService,
    private _modalService: NzModalService,
    private viewContainerRef: ViewContainerRef
  ) {
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

  goCreate() {
    this._router.navigate([mapping.administrators.budgetPalCreate]);
  }


  // createCategory() {
  //   const modalRef = this._modalService.create<CreateCategoryComponent, any>({
  //     nzContent: CreateCategoryComponent,
  //     nzWidth: 800,
  //     nzViewContainerRef: this.viewContainerRef,
  //     nzFooter: null,
  //     nzMaskClosable: false,
  //     nzTitle: '',
  //     nzCloseIcon: '',
  //     nzData: {
  //       favoriteLibrary: 'angular',
  //       favoriteFramework: 'angular',
  //     },
  //     nzBodyStyle: { padding: '0px' },
  //   });

  //   modalRef.afterClose.subscribe((result) => {
  //     if (result.canContinue) {
  //       this.expensesList.push(result.data);
  //     }
  //   });
  // }

  goToAdd() {
    this._router.navigate([mapping.administrators.addAcomptes]);
  }
}
