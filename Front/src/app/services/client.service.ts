import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http'

@Injectable()
export class ClientService {

  constructor(private http:HttpClient) { }

  newClient(client){
  return this.http.get("http://localhost:9004/clientpds/saveClient", {
      params:client
    }).map((res: Response) => {
      return res;
    });
  }
  get(){
    
    return  this.http.get("http://localhost:9004/clientpds/getClient", {
       params:{
         "id":localStorage.getItem('idClient')
       }
     }).map((res: Response) => {
       return res;
     });
         
   
   
 }
 updatePWd(client){
    
  return  this.http.get("http://localhost:9004/clientpds/updateClient", {
     params:client
   }).map((res: Response) => {
     return res;
   });
       
 
 
}
}
