import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class LoginService {

  constructor(private http:HttpClient) { }

  login(userName:string,password:string){
    
     return  this.http.get("http://localhost:9004/clientpds/find", {
        params:{
          "userName":userName,
          "password":password
        }
      }).map((res: Response) => {
        if (res === null){return false;}
        else {
          localStorage.setItem('isLoggedIn','true');
          localStorage.setItem('idClient',res['idClient']);

          return true;
        }
      });
          
    
    
  }
  logout(){
    
      localStorage.clear();
      return true;
     
     
  }

}
