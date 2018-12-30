import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable()
export class VehiculeService {

  constructor(private http:HttpClient) { }

  newVehicule(vehicule){

    this.http.get("http://localhost:9004/vehiculepds/save", {
      params:vehicule
    })
        .subscribe(
            data => {
              console.log("POST Request is successful ", data);
                
            },
            error => {
                console.log("Error", error);
            }
        );
  }
  deleteVehicule(id){

    this.http.get("http://localhost:9004/vehiculepds/delete", {
      params:{
        'numChassis':id
      }
    })
        .subscribe(
            data => {
              console.log("Delete Request is successful ");
                
            },
            error => {
                console.log("Error", error);
            }
        );
  }
  getAll(){
    let l = this.http.get("http://localhost:9004/vehiculepds/all");
   console.log(l);
    return l ;
  }

}
