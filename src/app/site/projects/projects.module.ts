import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectsComponent} from './projects.component';
import {ProjectRouting} from './projects.routing';
import {
  MatButtonModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatTooltipModule,
  MatExpansionModule,
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SharedModule} from 'primeng/primeng';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ProjectComponent} from './project/project.component';
import {ProjectDialogComponent} from './project-dialog/project-dialog.component';
@NgModule({
  imports: [
    ProjectRouting,
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    SharedModule,
    MatTooltipModule,
    MatExpansionModule
  ],
  declarations: [ProjectsComponent, ProjectComponent, ProjectDialogComponent]
})
export class ProjectModule { }
