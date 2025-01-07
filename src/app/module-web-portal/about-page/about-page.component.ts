import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.less'],
})
export class AboutPageComponent implements OnInit {

  listItems: any[] = [
    {
      name: "Gestion des comptes d'entreprises",
      description: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet",
      url: "assets/webportal/vector/cloud.svg"
    },
    {
      name: "Offres de service prémium",
      description: " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Amet",
      url: "assets/webportal/vector/setting.svg"
    },
    {
      name: "Des certificats réconnus",
      description: "Compliance with leading organizations including SOC2, GDPR, OpenID Connect, and others.",
      url: "assets/webportal/vector/certificate.svg",
      w: 74
    }
  ];
  listItemStats: any[] = [
    {
      subTitle: "Utilisateurs",
      title: "+90",
      icon: "user",
    },
    {
      subTitle: "Rue rois des roies",
      title: "Abidjan",
      icon: "environment",
    },
    {
      subTitle: "Services",
      title: "+10",
      icon: "database",
    }
  ];

  ngOnInit(): void {
  }
}
