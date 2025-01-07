import { Component, ElementRef, HostListener } from "@angular/core";
import * as Aos from "aos";

@Component({
  selector: "app-layout-portal",
  templateUrl: "./layout-portal.component.html",
  styleUrls: ["./layout-portal.component.less"],
})
export class LayoutPortalComponent {
  constructor(private el: ElementRef) {}

  ngOnInit() {}
}
