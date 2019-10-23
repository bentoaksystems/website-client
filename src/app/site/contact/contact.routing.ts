import {RouterModule, Routes} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {ContactComponent} from './contact.component';


const Contact_ROUTES: Routes = [
  {
    path: '', component: ContactComponent,
    children: [
      {path: 'contact', component: ContactComponent},
    ]
  }
];

export const ContactRouting = RouterModule.forChild(Contact_ROUTES);
export const ContactTestRouting = RouterTestingModule.withRoutes(Contact_ROUTES);
