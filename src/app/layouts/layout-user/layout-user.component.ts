import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-layout-user',
  templateUrl: './layout-user.component.html',
  styleUrls: ['./layout-user.component.less'],
})
export class LayoutUserComponent {
  isCollapsed = false;

  constructor(private _router: Router) {
  }

  goToHome() {
    this._router.navigate(['/']);
  }
}
