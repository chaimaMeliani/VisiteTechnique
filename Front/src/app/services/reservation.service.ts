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
}
