import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable()
export class MarqueService {

  constructor(private http:HttpClient) {

  }
  getMarques(){
    return this.http.get('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json')
  }
  getModeles(marque: string){
	  
    return this.http.get('https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/'+marque+'?format=json')
  }

}
