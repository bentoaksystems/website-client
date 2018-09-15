import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatGridListModule,
  MatListModule,
  MatProgressSpinnerModule} from '@angular/material';
import {GalleriaModule} from 'primeng/primeng';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import {AotPlugin} from '@ngtools/webpack';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {ContentfulService} from './contentful.service';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PeopleComponent } from './people/people.component';
import {LanguageService} from './language.service';
import {WindowService} from './window.service';
import { ContactComponent } from './contact/contact.component';
import { PersonComponent } from './people/person.component';
import { PersonDialogComponent } from './people/person-dialog.component';
import { ProjectComponent } from './projects/project.component';
import { ProjectDialogComponent } from './projects/project-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ProjectsComponent,
    AboutUsComponent,
    PeopleComponent,
    ContactComponent,
    PersonComponent,
    PersonDialogComponent,
    ProjectComponent,
    ProjectDialogComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatGridListModule,
    MatDialogModule,
    MatCardModule,
    FlexLayoutModule,
    GalleriaModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'home', component: HomeComponent},
      {path: 'people', component: PeopleComponent},
      {path: 'projects', component: ProjectsComponent},
      {path: 'about-us', component: AboutUsComponent},
      {path: 'contact', component: ContactComponent}
    ])
  ],
  providers: [ContentfulService, LanguageService, WindowService],
  bootstrap: [AppComponent],
  entryComponents: [PersonDialogComponent, ProjectDialogComponent]
})
export class AppModule { }
