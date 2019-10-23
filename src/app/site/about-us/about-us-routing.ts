import {RouterModule, Routes} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {AboutUsComponent} from './about-us.component';


const About_US_ROUTES: Routes = [
  {
    path: '', component: AboutUsComponent,
    children: [
      {path: 'about-us', component: AboutUsComponent},
    ]
  }
];

export const AboutUsRouting = RouterModule.forChild( About_US_ROUTES);
export const AboutUsTestRouting = RouterTestingModule.withRoutes( About_US_ROUTES);
