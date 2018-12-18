import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // Sample Varriables
  userName;
  password;
  correct: boolean;
  constructor(public router: Router,private loginService:LoginService) { }

  ngOnInit() {
    this.correct = true;
  }
  onSubmit() {
    var res = this.loginService.login(this.userName , this.password);
    if (res) {
     this.router.navigate(['/app']);
    }  else { this.correct = false; }

  }
}
