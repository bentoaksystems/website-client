import {RouterModule, Routes} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {SiteComponent} from './site.component';
import {PeopleComponent} from './people/people.component';
import {ProjectsComponent} from './projects/projects.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';

const Site_ROUTES: Routes = [
  {
    path: '', component: SiteComponent, children: [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'people', component: PeopleComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'about-us', component: AboutUsComponent},
    {path: 'contact', component: ContactComponent}
  ]
  }
];

export const SiteRouting = RouterModule.forChild(Site_ROUTES);
export const SiteTestRouting = RouterTestingModule.withRoutes(Site_ROUTES);
