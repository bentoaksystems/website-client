import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PeopleComponent} from './people.component';
import {PeopleRouting} from './people.routing';
import {
  MatButtonModule,
  MatDialogModule,
  MatIconModule,
  MatCardModule,
} from '@angular/material';
import { ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {PersonComponent} from './person/person.component';
@NgModule({
  imports: [
    PeopleRouting,
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
  ],
  declarations: [
    PeopleComponent,
    PersonComponent,
  ]
})
export class PeopleModule { }
