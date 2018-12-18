import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-client',
  templateUrl: './info-client.component.html',
  styleUrls: ['./info-client.component.scss']
})
export class InfoClientComponent implements OnInit {
  nomPrenom= null;
  cin= null;
  permis= null;
  constructor() { 
    
  }

  ngOnInit() {
    this.nomPrenom="nom prenom";
    this.cin= "12345678";
    this.permis= "987654321";  }

}
