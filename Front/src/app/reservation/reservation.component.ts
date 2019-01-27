import { Component, OnInit, ViewChild, OnDestroy,ElementRef  } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ClientService } from '../services/client.service';
import { ReservationService } from '../services/reservation.service';
import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  @ViewChild('selectVoitureModal') selectVoitureModal: ModalDirective;
  @ViewChild('addNewAppModal') addNewAppModal: ModalDirective;
  @ViewChild('content')content:ElementRef;
/*client*/
client:any;
  
  /* reservation en cours */
  id=0;
  voiture ={};
  date:any;
  emplacement;
  /******/
  //la liste des voitures
  voitures$ = [];
  /* nouvelle reservation */
  dateRes = null;
  heureRes = null;
  NewVoiture=null;
  newEmplacement=null;
  liste$;
  node;

  resExiste:any = false;
  resExisteVehicule:any = false;
  /* current reservation */
  currentRes =null ;
  listeRes;
 /***************************/
  constructor(private clientService:ClientService,private resService:ReservationService) {
   
   }

  ngOnInit() {
    
    this.clientService.get().subscribe((data)=>
    {this.client = data; this.voitures$ = data['vehiculeslist'];this.listeRes = data['reslist'];
     this.voiture=this.voitures$[0];
     this.changeReservation();
    });
    
    this.loadMap();

  }
  refresh(){
    this.clientService.get().subscribe((data)=>
    { this.client = data;this.voitures$ = data['vehiculeslist'];this.listeRes = data['reslist'];
     this.voiture=this.voitures$[0];
     this.changeReservation();
    });
  }
  Ticket(){
    let doc = new jsPDF('landscape','cm','a5');
    let specialElementHandlers = {
      '#editor':function(element,renderer){return true;}

    };
    let content = this.content.nativeElement;
    doc.text(10,2,"Reservation");
    doc.text(2,4,'ID:'+this.id);
    doc.text(2,6,'Client:'+this.client['lastName']+' '+this.client['firstName']);
    doc.text(2,8,'Vehicule:'+this.voiture['numChassis']+'_'+this.voiture['marque']+'_'+this.voiture['modele']);
    doc.text(2,10,'Emplacement:'+this.emplacement);
    doc.text(0.8,12,'Date:'+this.date);
    
     doc.save(this.id+'.pdf');
  }
  changeReservation(){
    this.currentRes = this.listeRes.filter(x => new Date (x.dateReservation) >= new Date() && x.vehicule === this.voiture['idVehicule'])[0];
    if(this.currentRes !== undefined){
     this.id = this.currentRes['id'];
     this.date = new Date(this.currentRes['dateReservation']);
    this.emplacement = this.currentRes['emplacement'];}
  }
  Charger(){
    this.changeReservation();
    this.selectVoitureModal.hide();
  }
  newReservation(){
    var date = new Date(this.dateRes);
    var heure= new Date(this.heureRes);
    date.setHours(heure.getHours());
    date.setMinutes(heure.getMinutes());
    let res = {
      "dateReservation":date.getMonth()+1+"/"+date.getDate()+"/"+date.getFullYear()+","+date.toLocaleTimeString(),
      "vehicule":this.NewVoiture,
      "emplacement":this.newEmplacement,
      "client":localStorage.getItem('idClient')
    }
    
    let resEncoursVehicule =this.listeRes.filter(x => new Date (x.dateReservation) >= new Date() && x.vehicule === this.NewVoiture);
    console.log(res);
    if(resEncoursVehicule.length === 1){
        this.resExisteVehicule=true;
    }
    else {
      this.resExisteVehicule=false;
       this.resService.existe(res['dateReservation'],res['emplacement']).subscribe((data)=>{
      this.resExiste =  data ;
      if(this.resExiste){
        console.log(this.resExiste)
      }
      else {
        this.resExiste =  false ;
        this.resService.newReservation(res).subscribe((data)=>{
          console.log(data)
         });
         this.addNewAppModal.hide();
         this.refresh();
      }
     });
    }
  
  }
  _advance_disabledDate(current: Date): boolean {
    //Future
    return current && current.getTime() < Date.now();
  }
loadMap(){

  navigator.geolocation.getCurrentPosition((position) => {

    
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
   
  
          let service = new google.maps.places.PlacesService(document.createElement('div'));


    service.nearbySearch({
      location: pos,
      rankBy: google.maps.places.RankBy.DISTANCE,
      name: 'centre+de+visite+technique'
      
    }, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        if(JSON.parse(localStorage.getItem("emp")) === null){
        localStorage.setItem("emp", JSON.stringify(results));}
        
      }  
        if(JSON.parse(localStorage.getItem("emp")) !== null){
          console.log('ok');
          ReservationComponent.prototype.liste$ = JSON.parse(localStorage.getItem("emp"));
    
        
      }
    });

  }, (err) => {
    console.log(err);
  });

}

}
