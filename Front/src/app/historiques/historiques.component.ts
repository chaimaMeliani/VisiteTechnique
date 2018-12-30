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
    
    { name: 'Vehicule' },
    { name: 'Date Reservation' },
    { name: 'Emplacement' },
    
  ];
  dynamicRows = [];
  backup =[];
  @ViewChild(DatatableComponent) tableDynamic: DatatableComponent;
  scrollBarHorizontal = (window.innerWidth < 960);
  columnModeSetting = (window.innerWidth < 960) ? 'standard':'force';
  constructor(private clientService:ClientService) { }

  ngOnInit() {
    this.clientService.get().subscribe((data)=>{ this.voitures$ = data['vehiculeslist'];this.dynamicRows = data['reslist'];
    this.dynamicRows.forEach(element => {
      let a = this.voitures$.find(x => x.idVehicule === element['vehicule']);
      element['vehicule']= a['numChassis']+'_'+a['marque']+'_'+a['modele'];
      let date =new Date(element['dateReservation']);
      
      element['dateReservation']=date;
    });
    this.dynamicRows =this.dynamicRows.filter(x => new Date (x.dateReservation) <= new Date());
    this.backup = this.dynamicRows;
   });
    
  }
  refresh(){
    this.dynamicRows =this.backup;
    this.voiture=null;
  }
  filterChanged(){
    
    this.dynamicRows =this.backup.filter(x => x.vehicule === this.voiture)
 
    }
}
