import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class GoogleService {
 public data;
  constructor(private http:HttpClient) { 
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.displayLocationInfo);
   }
  }

  
  displayLocationInfo(position) {
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;
    GoogleService.prototype.data = {lng,lat};
    console.log(GoogleService.prototype.data);
    let service = new google.maps.places.PlacesService(document.createElement('div'));
    service.nearbySearch({
      location: {lat:lat,lng:lng },
      rankBy: google.maps.places.RankBy.DISTANCE,
      name: 'centre+de+visite+technique'
    },GoogleService.prototype.callback)
    

    
  }
  callback (results, status){
 
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      
     
      GoogleService.prototype.data = results;
      //CentresComponent.prototype.htmlToAdd = text;
  }
}

}
