import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
@Injectable()
export class ReservationService {

  constructor(private http:HttpClient) { }

  newReservation(reservation){
    return this.http.get("http://localhost:9004/reservationpds/savereservation", {
        params:reservation
      }).map((res: Response) => {
        return res;
      });
    }
    existe(date,emp){
      return this.http.get("http://localhost:9004/reservationpds/reserationExiste", {
          params:{
            "date":date,
            "emp":emp
          }
        }).map((res: Response) => {
          return res;
        });
      }
    statistique(){
      return this.http.get("http://localhost:9004/reservationpds/statistique", {
          params:{
            "id":localStorage.getItem('idClient')
          }
        }).map((res: Response) => {
          return res;
        });
      }
}
