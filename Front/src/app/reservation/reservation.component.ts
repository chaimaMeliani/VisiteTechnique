import { Component, OnInit, ViewChild, OnDestroy  } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ClientService } from '../services/client.service';
import { ReservationService } from '../services/reservation.service';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  @ViewChild('selectVoitureModal') selectVoitureModal: ModalDirective;
  @ViewChild('addNewAppModal') addNewAppModal: ModalDirective;

  
  /* reservation en cours */
  id=0;
  voiture ={};
  date:Date = new Date();
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
  /* current reservation */
  currentRes =null ;
  listeRes;
 /***************************/
  constructor(private clientService:ClientService,private resService:ReservationService) {
   
   }

  ngOnInit() {
    
    this.clientService.get().subscribe((data)=>
    { this.voitures$ = data['vehiculeslist'];this.listeRes = data['reslist'];
     this.voiture=this.voitures$[0];
     this.changeReservation();
    });
    
    this.loadMap();

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
      "dateReservation":date.toLocaleDateString()+","+date.toLocaleTimeString(),
      "vehicule":this.NewVoiture,
      "emplacement":this.newEmplacement,
      "client":localStorage.getItem('idClient')
    }
   this.resService.newReservation(res).subscribe((data)=>{
      console.log(data)
     });
     this.addNewAppModal.hide();
     this.ngOnInit();
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
        console.log(results);
        if(JSON.parse(localStorage.getItem("emp")) === null){
        localStorage.setItem("emp", JSON.stringify(results));}
        
      } else {
        if(JSON.parse(localStorage.getItem("emp")) !== null){
          console.log('ok');
          ReservationComponent.prototype.liste$ = JSON.parse(localStorage.getItem("emp"));
    
        }
      }
    });

  }, (err) => {
    console.log(err);
  });

}

}
