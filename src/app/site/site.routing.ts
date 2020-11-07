import {RouterModule, Routes} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {SiteComponent} from './site.component';

const Site_ROUTES: Routes = [
  {
    path: '', component: SiteComponent, pathMatch: 'prefix', children: [
    {path: '', pathMatch: 'full', redirectTo: 'en/home'},
    {path: ':lang/home', loadChildren: 'app/site/home/home.module#HomeModule'},
    {path: ':lang/people', loadChildren: 'app/site/people/people.module#PeopleModule'},
    {path: ':lang/projects', loadChildren: 'app/site/projects/projects.module#ProjectsModule'},
    {path: ':lang/about-us', loadChildren: 'app/site/about-us/about-us.module#AboutUsModule'},
    {path: ':lang/contact', loadChildren: 'app/site/contact/contact.module#ContactModule'},
    {path: ':lang/pricing', loadChildren: 'app/site/pricing/pricing.module#PricingModule'},
  ],
  },
];

export const SiteRouting = RouterModule.forChild(Site_ROUTES);
export const SiteTestRouting = RouterTestingModule.withRoutes(Site_ROUTES);
