import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatGridListModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
} from '@angular/material';
import {GalleriaModule, SharedModule} from 'primeng/primeng';
import {FlexLayoutModule} from '@angular/flex-layout';
import 'hammerjs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {LanguageService} from './shared/services/language.service';
import {WINDOW_PROVIDERS} from './shared/services/window.service';
import {MessageService} from './shared/services/message.service';
import {HttpService} from './shared/services/http.service';
import {GetJsonFileService} from './shared/services/get-json-file.service';
import {HttpClientModule} from '@angular/common/http';
import {ResponsiveService} from './shared/services/responsive.service';
import {routing} from './app.routing';
import {RecaptchaModule} from 'ng-recaptcha';
// if you need forms support:
import {RecaptchaFormsModule} from 'ng-recaptcha/forms';
import {SpinnerService} from './shared/services/spinner.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    routing,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({appId: 'website-client'}),
    ReactiveFormsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatGridListModule,
    MatDialogModule,
    MatSnackBarModule,
    GalleriaModule,
    RecaptchaModule.forRoot(),
    RecaptchaFormsModule, // if you need forms support
  ],

  providers: [
    LanguageService,
    WINDOW_PROVIDERS,
    MessageService,
    GetJsonFileService,
    HttpService,
    ResponsiveService,
    SpinnerService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
