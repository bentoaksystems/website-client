import {BrowserModule} from '@angular/platform-browser';
import {NgModule, APP_INITIALIZER} from '@angular/core';
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
import localeEn from '@angular/common/locales/en';


import {AppComponent} from './app.component';
import {LanguageService} from './shared/services/language.service';
import {WINDOW_PROVIDERS} from './shared/services/window.service';
import {MessageService} from './shared/services/message.service';
import {HttpService} from './shared/services/http.service';
import {GetJsonFileService} from './shared/services/get-json-file.service';
import {HttpClientModule} from '@angular/common/http';
import {ResponsiveService} from './shared/services/responsive.service';
import {routing} from './app.routing';
import {ScrollToModule} from '@nicky-lenaers/ngx-scroll-to';
import {SpinnerService} from './shared/services/spinner.service';
import {ProjectService} from './shared/services/project.service';
import {ScrollService} from './shared/services/scroll.service';
import {StartupService} from './shared/services/startup.service';

import {Angulartics2Module} from 'angulartics2';
import { DictionaryService } from './shared/services/dictionary.service';
import {registerLocaleData} from '@angular/common';
import { CookiesService } from './shared/services/cookies.service';

registerLocaleData(localeEn, 'en');
export function startupServiceFactory(startupService: StartupService): Function {
  return () => startupService.load();
}
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    routing,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
    ScrollToModule.forRoot(),
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
    Angulartics2Module.forRoot()
  ],

  providers: [
    LanguageService,
    WINDOW_PROVIDERS,
    MessageService,
    GetJsonFileService,
    HttpService,
    ResponsiveService,
    SpinnerService,
    ProjectService,
    ScrollService,
    CookiesService,
    StartupService,
    {
      // Provider for APP_INITIALIZER
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      deps: [StartupService],
      multi: true
    },
    DictionaryService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
