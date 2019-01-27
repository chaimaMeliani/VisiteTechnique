
import { Component, OnInit, ViewChild ,ElementRef, NgZone,  } from '@angular/core';

import { ReservationService } from '../services/reservation.service';
@Component({
  selector: 'app-centres',
  templateUrl: './centres.component.html',
  styleUrls: ['./centres.component.scss']
})
export class CentresComponent implements OnInit {

  
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  infoWindow :any;
  chartdata: boolean = false;
 
  countryCount = [];
  countryData = [];
 
  //Chart
  view: any[] = [1200, 500];
 
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  trimLabels=true;
  doughnut = false;

  single: any[];
  constructor(private ngZone: NgZone,private resService:ReservationService){}
  
  ngOnInit() {
    
    this.resService.statistique().subscribe((data)=>{
      this.chartdata = true;
      let singleentry = {
        name: 'En cours',
        value: data['enCours']
      }
      this.countryData.push(singleentry);
       singleentry = {
        name: 'Terminé',
        value: data['fini']
      }
      this.countryData.push(singleentry);
      console.log(this.countryData);
     });
    
    
    
 

  this.single = [
    {'name':'v1','value':'2'},
    {'name':'v2','value':'1'},
    {'name':'v3','value':'0'}]
  }
 
  ngAfterViewInit() {
    this.loadMap();
}
loadMap(){

  navigator.geolocation.getCurrentPosition((position) => {
     
    let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    this.infoWindow = new google.maps.InfoWindow();
    let mapOptions = {
      center: latLng,
      zoom: 10,
      
    }
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    var marker = new google.maps.Marker({
      map: this.map,
      position: pos,
      icon :"http://maps.google.com/mapfiles/ms/micons/blue-dot.png"
  });
  this.map.setCenter(pos);
    this.infoWindow.setPosition(pos);
    this.infoWindow.setContent('Votre emplacement');
    this.infoWindow.open(this.map);
  
          let service = new google.maps.places.PlacesService(this.map);


    service.nearbySearch({
      location: latLng,
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
    if(JSON.parse(localStorage.getItem("emp")) === null){
      localStorage.setItem("emp", JSON.stringify(results));}
      
    for (var i = 0; i < results.length; i++) {
      
      this.createMarker(results[i]);
    }
  } else {
    if(JSON.parse(localStorage.getItem("emp")) !== null){
      let liste = JSON.parse(localStorage.getItem("emp"));
      for (var i = 0; i < liste.length; i++) {
      
        this.createMarker(liste[i]);
      }
    }
  }
}

createMarker(place){
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
      map: this.map,
      position: place.geometry.location
  });
  google.maps.event.addListener(marker, 'click', () => {
    
    this.infoWindow.setContent(place.name);
    this.infoWindow.open(this.map);
    this.infoWindow.setPosition(place.geometry.location);
  });
}
}
