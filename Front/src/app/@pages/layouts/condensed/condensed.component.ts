import { Component, OnInit, OnDestroy, ViewChild, HostListener, AfterViewInit,Input,ViewEncapsulation } from '@angular/core';
import { RootLayout } from '../root/root.component';

@Component({
  selector: 'condensed-layout',
  templateUrl: './condensed.component.html',
  styleUrls: ['./condensed.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CondensedComponent extends RootLayout implements OnInit {
    menuLinks = [
      {
        label:"Dashboard",
        routerLink:"dashboard",
        iconType:"pg",
        iconName:"home",
        thumbNailClass:"bg-success"
      },
      {
          label:"Reservation ",
          details:"en cours",
          routerLink:"email/list",
          iconType:"pg",
          iconName:"clock"
      },
      {
        label:"Centres de ",
        details:"visites techniques",
        routerLink:"centres",
        iconType:"pg",
        iconName:"map"
      },
      {
          label:"Historiques",
          routerLink:"historiques",
          iconType:"fa",
          iconName:"history"
      },
      {
        label:"Parametres",
        iconType:"pg",
        iconName:"settings",
        toggle:"close",
        submenu:[
          {
            label:"information client",
            routerLink:"infoClient",
            iconType:"fa",
            iconName:"user",
          },
          {
            label:"Liste vehicules",
            routerLink:"voitures",
            iconType:"fa",
            iconName:"car",
          }
        ]
    },

  ];

    ngOnInit() {
    }

}
