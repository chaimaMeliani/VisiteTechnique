import { Component, OnInit, ViewChild } from '@angular/core';
import {DatatableComponent} from '@swimlane/ngx-datatable';
import { ClientService } from '../services/client.service';
@Component({
  selector: 'app-historiques',
  templateUrl: './historiques.component.html',
  styleUrls: ['./historiques.component.scss']
})
export class HistoriquesComponent implements OnInit {
  //la liste des voitures
  voitures$ = [];

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
  constructor(private clientService:ClientService) { }

  ngOnInit() {
    this.clientService.get().subscribe((data)=>{ this.voitures$ = data['vehiculeslist'];console.log(this.voitures$);});
  }

  filterChanged(){
    console.log('value is ',this.voiture);
 
    }
}
