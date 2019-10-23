import {RouterModule, Routes} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {PeopleComponent} from './people.component';


const People_ROUTES: Routes = [
  {
    path: '', component: PeopleComponent,
    children: [
      {path: 'people', component: PeopleComponent},
    ]
  }
];

export const PeopleRouting = RouterModule.forChild(People_ROUTES);
export const PeopleTestRouting = RouterTestingModule.withRoutes(People_ROUTES);
