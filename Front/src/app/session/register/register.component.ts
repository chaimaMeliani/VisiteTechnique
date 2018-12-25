import { Component, OnInit , ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { MarqueService } from '../../services/marque.service';
import { ClientService } from '../../services/client.service';
import { VehiculeService } from '../../services/vehicule.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-register-page',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],

})
export class RegisterPageComponent implements OnInit {
  id:object;
  //tableau de types d'immatriculation 
  types = ['TU', 'PAT' , 'CMD', 'CD' , 'MD', 'MC', 'CC', 'PE'];
  disabledTabs = {
    vehiculeTab: true , };
  // L'onglet selectionne
  selectedStep=0;
  //Liste des marques
  marques$: Object;
  //la marque selectionee
  marque: string;
  //la liste des modeles
  modeles$: Object;
  //formulaires
  clientForm: FormGroup;
  vehiculeForm :FormGroup ;
typeImm=null;

    constructor( private fb: FormBuilder, private   data: MarqueService,private clientService:ClientService,
      private vehiculeService:VehiculeService,public router: Router ) {
      //Recupperation de la liste des marques
	  this.data.getMarques().subscribe( data => this.marques$ = data['Results']
    );
    // initialisation du formulaire
    this.vehiculeForm = this.fb.group({
      numChassis :[ '', [ Validators.required ] ],
      numCarteGrise :[ '', [ Validators.required ] ],
      typeImmatriculation :[ '', [ ] ],
      immatriculation :[ '', [ Validators.required  ] ],
      marque:[ '', [ Validators.required ] ],
	  modele:[ '', [ Validators.required ] ]
    });


  }

  ngOnInit() {
    // initialisation du formulaire
    this.clientForm = this.fb.group({
      firstName :[ '', [ Validators.required ] ],
      lastName :[ '', [ Validators.required ] ],
      cin :[ '', [ Validators.required ,Validators.minLength(8) ,Validators.maxLength(8) ] ],
      permis :[ '', [ Validators.required ] ],
      userName :[ '', [ Validators.required ] ],
      password :[ '', [ Validators.required ] ]
    });
  }
  // recuperer la liste des modeles selon la marque selectionne
  getModeles(){
	  if(this.marque !== undefined){

		this.data.getModeles(this.marque).subscribe(
      data => this.modeles$ = data["Results"]
    );
  }}
  // passer au deuxieme formulaire
  navigateToVehicule(){
    if (!this.clientForm.invalid) {


      this.disabledTabs.vehiculeTab = false;
      this.selectedStep = 1;

    }
    else{
      this.clientForm;
    }
   

  }
  // Enregistrement 
  submit(){
    if(!this.vehiculeForm.invalid){
      
      this.clientService.newClient(this.clientForm.value).subscribe((data)=>{
         this.id = data['idClient'] ;
         let v =Object.assign(this.vehiculeForm.value,{"client":this.id});
         this.vehiculeService.newVehicule(v);
         this.router.navigate(['/app/login']);
        });
      
    }
    else{
      this.vehiculeForm
    }

  }

  //Prev
  prevTab(){
    if(this.selectedStep > 0)
      this.selectedStep--;
  }
 

  //Shipping Control GET
  getFormControl(name) {
    return this.clientForm.controls[ name ];
  }
  getFormControlV(name) {
    return this.vehiculeForm.controls[ name ];
  }




}
