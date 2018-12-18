import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterPageComponent } from './register/register.component';


export const SessionRoute: Routes = [
  {
    path: '',
    children: [{
      path: 'login',
      component: LoginComponent
    },{
      path: 'register',
      component: RegisterPageComponent
    }
      ]
  }
];
