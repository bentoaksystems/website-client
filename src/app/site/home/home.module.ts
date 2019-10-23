import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRouting } from './home.routing';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatSidenavModule,
  MatCardModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatListModule,
  MatTooltipModule,
  MatExpansionModule, MatCheckboxModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'primeng/primeng';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CollapseModule } from './collapse/';


@NgModule({
  imports: [
    CollapseModule,
    HomeRouting,
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatListModule,
    SharedModule,
    MatTooltipModule,
    MatExpansionModule,
    NgbModule
  ],
  declarations: [HomeComponent, SlideShowComponent],
  bootstrap: [HomeComponent]
})
export class HomeModule {
}
