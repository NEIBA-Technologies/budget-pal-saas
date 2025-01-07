import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {mapping} from 'src/app/core/mapping-routing';

@Component({
    selector: 'app-layout-adminstrators',
    templateUrl: './layout-adminstrators.component.html',
    styleUrls: ['./layout-adminstrators.component.less']
})
export class LayoutAdminstratorsComponent {
    isCollapsed = false;


    constructor(private _router: Router) {
    }

    goToHome() {
        this._router.navigate(["/"])
    }

    goToNote() {
        this._router.navigate([mapping.administrators.budgetPalList]);
    }

    goToAddnote() {
        this._router.navigate([mapping.administrators.budgetPalCreate]);
    }

    goToListeUsers() {
        this._router.navigate([mapping.administrators.usersList]);
    }

    goToAddUser() {
        this._router.navigate([mapping.administrators.usersCreate]);
    }

    goToListeEntre() {
        this._router.navigate([mapping.administrators.enterpriseList]);
    }

    goToListPart() {
        this._router.navigate([mapping.administrators.particularList]);
    }

    goToAddCompte() {
        this._router.navigate([mapping.administrators.addAcomptes]);
    }
    goToProfil(){
        this._router.navigate([mapping.administrators.profilList]);
    }
    goToPermissions(){
        this._router.navigate([mapping.administrators.permissionlList]);
    }

    goToDashboard() {
        this._router.navigate([mapping.administrators.dashboard]);

    }
}
