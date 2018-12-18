import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  userName ="user";
  isLoggedIn = localStorage.getItem('isLoggedIn');
  constructor(public router: Router, private loginService:LoginService) { 
    if(this.isLoggedIn === null){
      
      this.router.navigate(['/app/login']);
    }
  }

  ngOnInit() {
    console.log(this.isLoggedIn);
    if(this.isLoggedIn === null){
      
      this.router.navigate(['/app/login']);
    }
  }
  logout(){
    if(this.loginService.logout()){
    this.router.navigate(['/app/login']);
    }
  }

}
