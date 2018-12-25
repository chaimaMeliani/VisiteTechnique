import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { ClientService } from '../services/client.service';


@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  userName ="user";
  client:Object =null;;
  isLoggedIn = localStorage.getItem('isLoggedIn');
  constructor(public router: Router, private loginService:LoginService,private clientService:ClientService) { 
    if(this.isLoggedIn === null){
      
      this.router.navigate(['/app/login']);
    }
  }

  ngOnInit() {
    if(this.isLoggedIn === null){
      
      this.router.navigate(['/app/login']);
    }
    this.clientService.get().subscribe((data)=>{ this.client = data});
  }
  logout(){
    if(this.loginService.logout()){
    this.router.navigate(['/app/login']);
    }
  }

}
