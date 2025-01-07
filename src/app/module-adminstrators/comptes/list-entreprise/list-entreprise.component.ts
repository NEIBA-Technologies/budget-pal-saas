import {Component, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {Router} from '@angular/router';
import {NzModalService} from 'ng-zorro-antd/modal';
import {mapping} from 'src/app/core/mapping-routing';
import {Pagination} from "../../../core/abstracts/Pagination";
import {Observable, of, Subscription} from "rxjs";
import {NzDrawerService} from "ng-zorro-antd/drawer";
import { NzPlacementType } from 'ng-zorro-antd/dropdown';

@Component({
  selector: 'app-list-entreprise',
  templateUrl: './list-entreprise.component.html',
  styleUrls: ['./list-entreprise.component.less']
})
export class ListEntrepriseComponent extends Pagination implements OnInit {




  selectedProvince = 'Etat1';
  selectedCity = 'Etat2';
  provinceData = ['Etat1', 'Etat2'];
  cityData: { [place: string]: string[] } = {
    Zhejiang: ['Hangzhou', 'Ningbo', 'Wenzhou'],
    Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang']
  };
  

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
    "Nom ",
    "Télephone",
    "Types compte",
    "Email",
    "Accès",
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
      name: 'Blomfield',
      telephone: '09 87 65 54 43',
      types:'Entreprise',
      email: 'blom@gmail.com',
      accès: 'en cours',
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

  provinceChange(value: string): void {
    this.selectedCity = this.cityData[value][0];
  }

  ngOnInit(): void {
    this.data$ = of(this.datas)
    this.pageSize = 10;
    this.pageIndex = 1;
    this.total = this.datas.length * 35;
  }

  goCreate() {
    this._router.navigate([mapping.administrators.addAcomptes]);
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
  //     nzBodyStyle: {padding: '0px'},
  //   });

  //   modalRef.afterClose.subscribe((result) => {
  //     if (result.canContinue) {
  //       this.categoryExpenses.push(result.data);
  //     }
  //   });
  // }

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
