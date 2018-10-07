import {RouterModule, Routes} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {ProjectsComponent} from './projects.component';


const Project_ROUTES: Routes = [
  {
    path: '', component: ProjectsComponent,
    children: [
      {path: 'project', component: ProjectsComponent},
    ]
  }
];

export const ProjectRouting = RouterModule.forChild(Project_ROUTES);
export const ProjectTestRouting = RouterTestingModule.withRoutes(Project_ROUTES);
