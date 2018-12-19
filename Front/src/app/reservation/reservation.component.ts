import { Component, OnInit, ViewChild  } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  @ViewChild('selectVoitureModal') selectVoitureModal: ModalDirective;
  @ViewChild('addNewAppModal') addNewAppModal: ModalDirective;

  
  /* reservation en cours */
  id='1';
  voiture='v1';
  date:Date = new Date();
  emplacement='ariana';
  /******/
  //liste des voitures 
  voitures$=['v1','v2'];
  /* nouvelle reservation */
  dateRes = null;
  heureRes = null;
  NewVoiture=null;
  newEmplacement=null;
  liste$=null;
 /***************************/
  constructor() { }

  ngOnInit() {
    this.loadMap();
  }
  _advance_disabledDate(current: Date): boolean {
    //Future
    return current && current.getTime() < Date.now();
  }
  Charger(){
    this.selectVoitureModal.hide();
  }

  ngAfterViewInit() {
    this.loadMap();
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
        this.callback(results, status)
    });

  }, (err) => {
    console.log(err);
  });

}

callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    ReservationComponent.prototype.liste$ = results;
  }
}
}
