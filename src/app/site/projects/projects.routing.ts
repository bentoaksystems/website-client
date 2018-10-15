import {RouterModule, Routes} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {ProjectsComponent} from './projects.component';
import {PrjPageComponent} from './prj-page/prj-page.component';


const Project_ROUTES: Routes = [
  {path: '', component: ProjectsComponent, pathMatch: 'full'},
  {path: 'projectPage', component: PrjPageComponent},
];

export const ProjectRouting = RouterModule.forChild(Project_ROUTES);
export const ProjectTestRouting = RouterTestingModule.withRoutes(Project_ROUTES);
