import {Component, ElementRef, EventEmitter, Input, Output} from '@angular/core';
import {mapping, portalRouteMap} from "../../../../core/mapping-routing";
import {Router} from "@angular/router";

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.less']
})
export class ItemMenuComponent {

  @Input() isVisibleMenuMobile: boolean = false;
  @Output() isVisibleMenuMobileChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  protected readonly portalRouteMap = portalRouteMap;

  constructor(private el: ElementRef, private _router: Router) {
  }

  ngOnInit() {
  }


  goPrice() {
    this.canUseCloseMenu();
    this._router.navigate([portalRouteMap.price]);
  }

  goPartner() {
    this.canUseCloseMenu();
    this._router.navigate([portalRouteMap.partner]);
  }

  goAbout() {
    this.canUseCloseMenu();
    this._router.navigate([portalRouteMap.about]);
  }

  hasActive(link: string): boolean {
    return this._router.url.includes(link);
  }

  toggleMenuMobile() {
    this.isVisibleMenuMobile = !this.isVisibleMenuMobile;
  }

  private canUseCloseMenu() {
    this.isVisibleMenuMobile = false;
    this.isVisibleMenuMobileChange.emit(false)
  }

  goFeature() {
    this.canUseCloseMenu();
    this._router.navigate([portalRouteMap.features])
  }

  goRegister() {
    this.canUseCloseMenu();
    this._router.navigate([mapping.registerAccount])
  }
}
