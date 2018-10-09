import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutUsComponent} from './about-us.component';
import {AboutUsRouting} from './about-us-routing';
import {

} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
@NgModule({
  imports: [
    AboutUsRouting,
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule

  ],
  declarations: [AboutUsComponent]
})
export class AboutUsModule { }
