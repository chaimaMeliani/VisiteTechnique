import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http'

@Injectable()
export class ClientService {

  constructor(private http:HttpClient) { }

  newClient(client){
    this.http.get("http://localhost:9004/clientpds/saveClient", {
      params:client
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

}
