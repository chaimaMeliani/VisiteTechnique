import { Routes } from '@angular/router';
//Layouts
import {
  CondensedComponent,
  BlankComponent,
  CorporateLayout,
  SimplyWhiteLayout,
  ExecutiveLayout,
  CasualLayout ,
  BlankCasualComponent,
  BlankCorporateComponent,
  BlankSimplywhiteComponent
} from './@pages/layouts';
import { CentresComponent } from './centres/centres.component';
import { VoituresComponent } from './voitures/voitures.component';
import { HistoriquesComponent } from './historiques/historiques.component';
import { InfoClientComponent } from './info-client/info-client.component';
import { ReservationComponent} from './reservation/reservation.component';
import { AuthGuard } from "./auth.guard";
export const AppRoutes: Routes = [
  {
    path: 'app',

  component: CondensedComponent,
  canActivate: [AuthGuard]
},
  {
    path: 'app',
    component: BlankComponent,
    children: [{
      path: '',
      loadChildren: './session/session.module#SessionModule'
    }],
  },
  {
    path: 'app',
    component: CondensedComponent,
    
    children: [{
      path: 'Home',
      component: CentresComponent,
      canActivate: [AuthGuard]
    }],
  },
  {
    path: 'app',
    component: CondensedComponent,
    children: [{
      path: 'voitures',
      component: VoituresComponent,
      canActivate: [AuthGuard]
    }],
  },
  {
    path: 'app',
    component: CondensedComponent,
    children: [{
      path: 'historiques',
      component: HistoriquesComponent,
      canActivate: [AuthGuard]
    }],
  },
  {
    path: 'app',
    component: CondensedComponent,
    children: [{
      path: 'infoClient',
      component: InfoClientComponent,
      canActivate: [AuthGuard]
    }],
  },
  {
    path: 'app',
    component: CondensedComponent,
    children: [{
      path: 'reservation',
      component: ReservationComponent,
      canActivate: [AuthGuard]
    }],
  }
];
