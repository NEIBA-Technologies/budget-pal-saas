import {Component, ViewContainerRef} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-repayment',
  templateUrl: './repayment.component.html',
  styleUrls: ['./repayment.component.less']
})
export class RepaymentComponent {
  checked = false;
  loading = false;
  indeterminate = false;
  listOfData: readonly any[] = [];
  listOfCurrentPageData: readonly any[] = [];
  noteFraisListing: readonly any[] = [
    {
      id: '1',
      name: 'John Doe',
      noteFrais: 'Septembre 2023',
      nbDepenses: '1',
      montant: '10 000 FCFA',
      statut: 'En cours',

    },
    {
      id: '2',
      name: 'John Doe',
      noteFrais: 'Septembre 2023',
      nbDepenses: '1',
      montant: '10 000 FCFA',
      statut: 'En cours',
    },
    {
      id: '3',
      name: 'John Doe',
      noteFrais: 'Septembre 2023',
      nbDepenses: '1',
      montant: '10 000 FCFA',
      statut: 'En cours',
    },
    {
      id: '4',
      name: 'John Doe',
      noteFrais: 'Septembre 2023',
      nbDepenses: '1',
      montant: '10 000 FCFA',
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
}
