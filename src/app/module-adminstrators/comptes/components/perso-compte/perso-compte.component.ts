import { Component } from '@angular/core';

@Component({
  selector: 'app-perso-compte',
  templateUrl: './perso-compte.component.html',
  styleUrls: ['./perso-compte.component.less'],
})
export class PersoCompteComponent {
  selectedId: number | null = null;

  selectType(id: number) {
    this.selectedId = id;
  }
}
