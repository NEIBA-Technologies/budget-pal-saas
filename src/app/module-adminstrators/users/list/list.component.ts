import {Component, OnInit, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import {Router} from '@angular/router';
import {NzDrawerService} from 'ng-zorro-antd/drawer';
import {NzModalService} from 'ng-zorro-antd/modal';
import {mapping} from 'src/app/core/mapping-routing';
import {EditComponentComponent} from '../components/edit-component/edit-component.component';
import {Pagination} from "../../../core/abstracts/Pagination";
import {Observable, of, Subscription} from "rxjs";
import {CreateCategoryComponent} from "../../note-frais/components/create-category/create-category.component";

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
        "Nom & prénom(s)",
        "Email",
        "Téléphone",
        "Profil",
        "Validation du compte"
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
            name: 'John Doe',
            email: "email@gmail.com",
            phone: '+225 0701020304',
            validation: 'en cours',
            profile: 'Gestionnaire',
            status: false,
        }).map((value, index) => {
            this.datas.push({
                ...value,
                id: index + 1,
                status: index % 2 == 0,
                validation: index % 2 == 0 ? 'Effectuée' : 'En cours',
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

    goCreate() {
        this._router.navigate([mapping.administrators.employedCreate]);
    }


    goToEdit() {
        this._router.navigate([mapping.administrators.editAdmin]);
    }
       
}
