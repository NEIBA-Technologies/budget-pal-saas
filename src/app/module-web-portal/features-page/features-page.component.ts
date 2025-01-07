import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { portalRouteMap } from 'src/app/core/mapping-routing';

@Component({
  selector: 'app-features-page',
  templateUrl: './features-page.component.html',
  styleUrls: ['./features-page.component.less']
})
export class FeaturesPageComponent implements OnInit {


  constructor(private _router:Router){}

  listFonctionnality: any[] = [
    {
      imgUrl: "assets/webportal/fonctionnality/list.svg",
      title: " Téléchargement de  Reçus et de Factures",
      subtitle: "Les utilisateurs devraient pouvoir télécharger facilement des reçus, des factures et d'autres documents justificatifs."
    },
    {
      imgUrl: "assets/webportal/fonctionnality/Frame.svg",
      title: " Calcul Automatique des Totalisations",
      subtitle: "La plateforme peut calculer automatiquement les totaux des dépenses et les devises étrangères pour une soumission rapide."
    },
    {
      imgUrl: "assets/webportal/fonctionnality/Frame-1.svg",
      title: "Tableaux de Bord et Rapports",
      subtitle: "Les utilisateurs et les gestionnaires peuvent accéder à des tableaux de bord et à des rapports pour visualiser les dépenses, les tendances et les données analytiques."
    }
  ];
  ngOnInit(): void {
    
  }

  goDetailPage(){
    this._router.navigate([portalRouteMap.detailFeature]);
  }

}
