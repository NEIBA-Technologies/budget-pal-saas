import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { portalRouteMap } from 'src/app/core/mapping-routing';

@Component({
  selector: 'app-home-page-hero-section',
  templateUrl: './home-page-hero-section.component.html',
  styleUrls: ['./home-page-hero-section.component.less']
})
export class HomePageHeroSectionComponent implements OnInit {

ngOnInit(): void {
  
}
constructor(private _router:Router){}
  goToContact(){
    this._router.navigate([portalRouteMap.contact]);
  }
}
