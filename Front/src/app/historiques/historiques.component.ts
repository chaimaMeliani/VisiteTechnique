import { Component, OnInit, ViewChild } from '@angular/core';
import {DatatableComponent} from '@swimlane/ngx-datatable';
@Component({
  selector: 'app-historiques',
  templateUrl: './historiques.component.html',
  styleUrls: ['./historiques.component.scss']
})
export class HistoriquesComponent implements OnInit {
  //la liste des voitures
  voitures$ = ["v1" , "v2"];

  voiture=null;
  //Tableau 
  columnsDynamic = [
    { name: 'Id' },
    { name: 'Voiture' },
    { name: 'Date reservation' },
    { name: 'Emplacement' },
    { name: 'Etat' },
    
  ];
  dynamicRows = [];
  @ViewChild(DatatableComponent) tableDynamic: DatatableComponent;
  scrollBarHorizontal = (window.innerWidth < 960);
  columnModeSetting = (window.innerWidth < 960) ? 'standard':'force';
  constructor() { }

  ngOnInit() {
  }

  filterChanged(){
    console.log('value is ',this.voiture);
 
    }
}
