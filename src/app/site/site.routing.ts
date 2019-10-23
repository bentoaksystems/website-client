import {RouterModule, Routes} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {SiteComponent} from './site.component';

const Site_ROUTES: Routes = [
  {
    path: '', component: SiteComponent, pathMatch: 'prefix', children: [
    {path: '', pathMatch: 'full', redirectTo: 'home'},
    {path: 'home', loadChildren: 'app/site/home/home.module#HomeModule'},
    {path: 'people', loadChildren: 'app/site/people/people.module#PeopleModule'},
    {path: 'projects', loadChildren: 'app/site/projects/projects.module#ProjectsModule'},
    {path: 'about-us', loadChildren: 'app/site/about-us/about-us.module#AboutUsModule'},
    {path: 'contact', loadChildren: 'app/site/contact/contact.module#ContactModule'},
    {path: 'pricing', loadChildren: 'app/site/pricing/pricing.module#PricingModule'},
  ],
  },
];

export const SiteRouting = RouterModule.forChild(Site_ROUTES);
export const SiteTestRouting = RouterTestingModule.withRoutes(Site_ROUTES);
