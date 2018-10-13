import {RouterModule, Routes} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {HomeComponent} from './home.component';


const Home_ROUTES: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {path: 'home', component: HomeComponent},
    ]
  }
];

export const HomeRouting = RouterModule.forChild(Home_ROUTES);
export const HomeTestRouting = RouterTestingModule.withRoutes(Home_ROUTES);
