import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-info-client',
  templateUrl: './info-client.component.html',
  styleUrls: ['./info-client.component.scss']
})
export class InfoClientComponent implements OnInit {
  @ViewChild('addNewAppModal') addNewAppModal: ModalDirective;
  client:object={ "firstName":"","lastName":"","cin":"","permis":"","userName":""}
  password=null;
  constructor(private clientService:ClientService) { 
    
  }

  ngOnInit() {
    this.clientService.get().subscribe((data)=>{ this.client = data});
     
  }
  showModal(){
    this.addNewAppModal.show();
  }
  submit(){
    console.log(this.password);
    this.client['password']=this.password;
    delete this.client['reslist'];delete this.client['vehiculeslist'];
    this.clientService.updatePWd(this.client).subscribe((data)=>{ this.client = data});
    this.addNewAppModal.hide();
  }
}
