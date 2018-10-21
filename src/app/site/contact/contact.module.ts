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
import { RecaptchaModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
// if you need forms support:
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';

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
    MatExpansionModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule, // if you need forms support
  ],
  declarations: [ContactComponent],
  providers: [{
    provide: RECAPTCHA_SETTINGS,
    useValue: {
      siteKey: '6LcjF3YUAAAAAMXMLUyI_2ehbB95XlFre7f7mBQh',
    } as RecaptchaSettings,
  }]
})
export class ContactModule { }
