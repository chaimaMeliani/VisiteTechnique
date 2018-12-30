import { Component, OnInit, ViewChild } from '@angular/core';
import {DatatableComponent} from '@swimlane/ngx-datatable';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { MarqueService } from '../services/marque.service';
import { VehiculeService } from '../services/vehicule.service';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-voitures',
  templateUrl: './voitures.component.html',
  styleUrls: ['./voitures.component.scss']
})
export class VoituresComponent implements OnInit {
  @ViewChild('addNewAppModal') addNewAppModal: ModalDirective;
  @ViewChild('deleteModal') deleteModal: ModalDirective;
  // popup formulaire
  // tableau des types des immatculations
  types = ['TU', 'PAT' , 'CMD', 'CD' , 'MD', 'MC', 'CC', 'PE'];
    //Liste des marques
    marques$: Object;
    //la liste des modeles
    modeles$: Object;

 /****  fromulaire ****/
  numChassis = null;
  numCarteGrise = null;
  typeImmatriculation = null;
  immatriculation = null;
  marque = null;
  modele = null;
/****  fromulaire ****/

  //Tableau 
  columnsDynamic = [
    { name: 'Num Chassis' },
    { name: 'Num Carte grise' },
    { name: 'Type Immatriculation' },
    { name: 'Immatriculation' },
    { name: 'Marque' },
    { name: 'Modele' },
    
  ];
  dynamicRows ;
  selected = [];
  liste;
  erreur=false;
  @ViewChild(DatatableComponent) tableDynamic: DatatableComponent;
  scrollBarHorizontal = (window.innerWidth < 960);
  columnModeSetting = (window.innerWidth < 960) ? 'standard':'force';
  placeholder=""
  constructor( private   data: MarqueService ,private vehiculeService:VehiculeService ,private clientService:ClientService) {
     //Recupperation de la liste des marques
	  this.data.getMarques().subscribe( data => this.marques$ = data['Results']
    );
    this.clientService.get().subscribe((data)=>{ this.dynamicRows = data['vehiculeslist']});
   
   }
   onSelect({ selected }) {
    this.deleteModal.show();
    
  }
  delete(){
    if(this.dynamicRows.length == 1){
    this.erreur =true;
  }
    else{
     this.vehiculeService.deleteVehicule(this.selected[0]['idVehicule']);
    this.clientService.get().subscribe((data)=>{ this.dynamicRows = data['vehiculeslist']}); }
    this.selected = [];
   this.deleteModal.hide();

  }
  ngOnInit() {
  }
  getModeles(){
	  if(this.marque !== null){
		this.data.getModeles(this.marque).subscribe(
      data => this.modeles$ = data["Results"]
    );
  }}
  
  showModal(){
    this.addNewAppModal.show();
  }
  addRow(){
    let temp = {
      "numChassis" : this.numChassis,
      "numCarteGrise" :  this.numCarteGrise,
      "typeImmatriculation" : this.typeImmatriculation,
      "immatriculation":  this.immatriculation,
      "marque" : this.marque,
      "modele":  this.modele,
      "client":localStorage.getItem('idClient')
    }
    console.log(temp);
    this.vehiculeService.newVehicule(temp);
    this.dynamicRows = [...this.dynamicRows, temp];
    this.addNewAppModal.hide();
  }
}
