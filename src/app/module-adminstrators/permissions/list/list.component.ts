import {Component, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {Router} from '@angular/router';
import {NzModalService} from 'ng-zorro-antd/modal';
import {mapping} from 'src/app/core/mapping-routing';
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
    "permission ",
  ];
  private unsubscription: Subscription = new Subscription();

  constructor(
    private _router: Router,
        private _modalService: NzModalService,
        private viewContainerRef: ViewContainerRef,
        private _drawerService: NzDrawerService,
  ) {
    super();
    Array(5).fill({
      id: '1',
      permission: 'Permissions 1',
     
     
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



  

  onExport(rowItem: any) {

  }

  onDeleteItem(rowItem: any) {
  }

  // goToNewPermission() {
  //   this._drawerService.create({
  //       nzContent: CreateComponent,
  //       nzPlacement: "right",
  //       nzSize: "large",
  //       nzTitle: "Nouveau profil",
  //       nzMaskClosable: false,
  //       nzCloseOnNavigation: false,
  //       nzClosable: true,
  //       nzWrapClassName: "drawer-create",
  //       nzBodyStyle: {'padding': 0}
  //   });
  // }
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

