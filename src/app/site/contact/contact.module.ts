import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactComponent} from './contact.component';
import {ContactRouting} from './contact.routing';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatSidenavModule,
  MatCardModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatExpansionModule, MatCheckboxModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SharedModule} from 'primeng/primeng';
import {FlexLayoutModule} from '@angular/flex-layout';
@NgModule({
  imports: [
    ContactRouting,
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
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    SharedModule,
    MatExpansionModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
