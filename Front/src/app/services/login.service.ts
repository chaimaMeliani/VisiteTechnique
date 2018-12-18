import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class LoginService {

  constructor(private http:HttpClient) { }

  login(userName:string,password:string){
    if ( userName === 'admin' && password === 'admin') {
      localStorage.setItem('isLoggedIn', 'true');
      return true;
     }
     else{
       return false;
     }
  }
  logout(){
    
      localStorage.clear();
      return true;
     
     
  }

}
