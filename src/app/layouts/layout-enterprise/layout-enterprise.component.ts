import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {mapping} from 'src/app/core/mapping-routing';

@Component({
    selector: 'app-layout-enterprise',
    templateUrl: './layout-enterprise.component.html',
    styleUrls: ['./layout-enterprise.component.less']
})
export class LayoutEnterpriseComponent {
    isCollapsed = false;


    constructor(private _router: Router) {
    }

    goToHome() {
        this._router.navigate(["/"])
    }

    listNote() {
        this._router.navigate([mapping.enterprises.budgetPalList]);
    }

    addNote() {
        this._router.navigate([mapping.enterprises.budgetPalAdd]);
    }

    listAccount() {
        this._router.navigate([mapping.enterprises.listAccount]);
    }

    addAccount() {
        this._router.navigate([mapping.enterprises.addAccount]);
    }

    repayment() {
        this._router.navigate([mapping.enterprises.repayment]);
    }

    link() {
        this._router.navigate([mapping.enterprises.link]);
    }
}
