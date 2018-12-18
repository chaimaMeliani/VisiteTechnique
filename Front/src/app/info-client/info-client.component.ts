import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-info-client',
  templateUrl: './info-client.component.html',
  styleUrls: ['./info-client.component.scss']
})
export class InfoClientComponent implements OnInit {
  @ViewChild('addNewAppModal') addNewAppModal: ModalDirective;
  nomPrenom= null;
  cin= null;
  permis= null;
  userName=null;
  password=null;
  constructor() { 
    
  }

  ngOnInit() {
    this.nomPrenom="nom prenom";
    this.cin= "12345678";
    this.permis= "987654321";
    this.userName="user name"; 
  }
  showModal(){
    this.addNewAppModal.show();
  }
  submit(){
    console.log(this.password);
    this.addNewAppModal.hide();
  }
}
