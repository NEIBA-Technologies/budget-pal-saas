import {Component, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {Router} from '@angular/router';
import {NzModalService} from 'ng-zorro-antd/modal';
import {mapping} from 'src/app/core/mapping-routing';
import {CreateCategoryComponent} from '../components/create-category/create-category.component';
import {Pagination} from "../../../core/abstracts/Pagination";
import {Observable, of, Subscription} from "rxjs";
import {NzDrawerService} from "ng-zorro-antd/drawer";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent extends Pagination implements OnInit {

  @ViewChild('extraFilter') extraFilter: TemplateRef<any> | undefined;
  public data$: Observable<any[] | null> = of(null);
  public isLoading: boolean = false;
  checked: boolean = false;
  indeterminate: boolean = false;
  setOfChecked: any[] = [];
  datas: any[] = [];
  categoryExpenses: any[] = [];
  tableHeaderTitle: any[] = [
    "Id",
    "Note de frais",
    "Nombre de dépenses",
    "Montant",
    "Statut",
  ];
  private unsubscription: Subscription = new Subscription();

  constructor(
    private _router: Router,
    private _modalService: NzModalService,
    private viewContainerRef: ViewContainerRef,
    private _drawerService: NzDrawerService,
  ) {
    super();
    Array(10).fill({
      id: '1',
      noteFrais: 'Septembre 2023',
      nbDepenses: 1,
      montant: '10000',
      statut: 'en cours',
    }).map((value, index) => {
      this.datas.push({
        ...value,
        id: index + 1,
        nbDepenses: Math.ceil((index * Math.PI) + Math.random())
      })
    })
    this.onRloadData()
  }

  public override onRloadData(): void {

  }

  ngOnInit(): void {
    this.data$ = of(this.datas)
    this.pageSize = 10;
    this.pageIndex = 1;
    this.total = this.datas.length * 35;
  }

  goCreate() {
    this._router.navigate([mapping.administrators.budgetPalCreate]);
  }


  public onAllChecked(value: boolean): void {
    this.datas.forEach(item => this.updateCheckedSet(item, value));
    this.refreshCheckedStatus();
  }

  public updateCheckedSet(item: any, checked: boolean): void {
    if (checked) {
      this.setOfChecked.push(item);
    } else {
      this.setOfChecked = this.setOfChecked.filter(it => it.id != item.id);
    }
  }

  public refreshCheckedStatus(): void {
    this.checked = this.datas.every(item => this.setOfChecked.some(it => it.id === item.id));
    this.indeterminate = this.datas.some(item => this.setOfChecked.some(it => it.id === item.id)) && !this.checked;
  }

  public _alreadyInTagSelection(rowItem: any) {
    return this.setOfChecked.some(it => it.id === rowItem.id);
  }

  public onItemChecked(item: any, checked: boolean): void {
    this.updateCheckedSet(item, checked);
    this.refreshCheckedStatus();
  }

  createCategory() {
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
      nzBodyStyle: {padding: '0px'},
    });

    modalRef.afterClose.subscribe((result) => {
      if (result.canContinue) {
        this.categoryExpenses.push(result.data);
      }
    });
  }

  onShowItem(rowItem: any) {

  }

  onUpdateItem(rowItem: any) {

  }

  onExport(rowItem: any) {

  }

  onDeleteItem(rowItem: any) {
  }

  showDrawerFilter() {
    this._drawerService.create({
      nzPlacement: "right",
      nzTitle: "Plus de filtres",
      nzSize: "default",
      nzCloseOnNavigation: false,
      nzClosable: true,
      nzMaskClosable: false,
      nzExtra: this.extraFilter
    })
  }
}
