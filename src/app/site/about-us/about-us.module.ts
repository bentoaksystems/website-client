import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutUsComponent} from './about-us.component';
import {AboutUsRouting} from './about-us-routing';
import {

} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CICDComponent} from './components/cicd/cicd.component';
import { WebDevelopmentComponent } from './components/web-development/web-development.component';
import { SoftwareDevelopmentComponent } from './components/software-development/software-development.component';
@NgModule({
  imports: [
    AboutUsRouting,
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule
  ],
  declarations: [AboutUsComponent, CICDComponent, WebDevelopmentComponent, SoftwareDevelopmentComponent]
})
export class AboutUsModule { }
