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
  correct;
  constructor(public router: Router,private loginService:LoginService) { }

  ngOnInit() {
    this.correct = true;
  }
  onSubmit() {
    this.loginService.login(this.userName , this.password).subscribe((data)=>{ this.correct = data
    if(this.correct){this.router.navigate(['/app/Home']);}
    });
    console.log(this.correct);
  }
}
