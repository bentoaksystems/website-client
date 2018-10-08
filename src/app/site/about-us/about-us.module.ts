import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutUsComponent} from './about-us.component';
import {AboutUsRouting} from './about-us-routing';
import {

} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';

import {FlexLayoutModule} from '@angular/flex-layout';
@NgModule({
  imports: [
    AboutUsRouting,
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,

  ],
  declarations: [AboutUsComponent]
})
export class AboutUsModule { }
