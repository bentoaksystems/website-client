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
import { TechnicalSupportComponent } from './components/technical-support/technical-support.component';

import { SoftwareDevelopmentComponent } from './components/software-development/software-development.component';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';
@NgModule({
  imports: [
    AboutUsRouting,
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule,
    ScrollToModule.forRoot(),
  ],
  declarations: [AboutUsComponent, CICDComponent,TechnicalSupportComponent, WebDevelopmentComponent, SoftwareDevelopmentComponent]
})
export class AboutUsModule { }
