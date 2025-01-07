import {Component, ViewContainerRef} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';
import {mapping} from "../../core/mapping-routing";

@Component({
  selector: 'app-list-account',
  templateUrl: './list-account.component.html',
  styleUrls: ['./list-account.component.less']
})
export class ListAccountComponent {
  checked = false;
  loading = false;
  indeterminate = false;
  listOfData: readonly any[] = [];
  listOfCurrentPageData: readonly any[] = [];
  noteFraisListing: readonly any[] = [
    {
      id: '1',
      typeUser: 'Admin',
      name: 'John Doe',
      tel: '+225 0701020304',
      email: 'email@gmail.com',
      statut: 'En cours',

    },
    {
      id: '2',
      typeUser: 'Membre',
      name: 'John Doe',
      tel: '+225 0701020304',
      email: 'email@gmail.com',
      statut: 'En cours',
    },
    {
      id: '3',
      typeUser: 'Membre',
      name: 'John Doe',
      tel: '+225 0701020304',
      email: 'email@gmail.com',
      statut: 'En cours',
    },
    {
      id: '4',
      typeUser: 'Admin',
      name: 'John Doe',
      tel: '+225 0701020304',
      email: 'email@gmail.com',
      statut: 'En cours',
    },

  ];
  setOfCheckedId = new Set<number>();
  expensesList: any;

  constructor(
    private fb: FormBuilder,
    private _router: Router,
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

  onLink() {
    this._router.navigate([mapping.enterprises.link]);
  }

  addAccount() {
    this._router.navigate([mapping.enterprises.addAccount]);
  }
}
