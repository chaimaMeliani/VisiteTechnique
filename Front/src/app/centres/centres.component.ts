
import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-centres',
  templateUrl: './centres.component.html',
  styleUrls: ['./centres.component.scss']
})
export class CentresComponent implements OnInit {
  loc$: Object;
  liste$;
  
  @ViewChild('centres') myDiv: HTMLDivElement;
  
  constructor() { }
   getListe(position) {
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;
  
    let service = new google.maps.places.PlacesService(document.createElement('div'));
    service.nearbySearch({
      location: {lat:lat,lng:lng },
      rankBy: google.maps.places.RankBy.DISTANCE,
      name: 'centre+de+visite+technique'
    },function(results,status){
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log(results);
        CentresComponent.prototype.liste$ = results;
    }
    })
    

    
  }
  ngOnInit() {
  /*  if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(this.getListe);
    }*/
    
  }
 
}
